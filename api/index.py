import os
import json
import re

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai


# ========================================
# 환경 변수
# ========================================

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")


# ========================================
# FastAPI
# ========================================

app = FastAPI(
    title="Palette AI API"
)


# ========================================
# CORS
# ========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ========================================
# 요청 데이터
# ========================================

class PaletteRequest(BaseModel):
    prompt: str


# ========================================
# Gemini 클라이언트
# ========================================

def get_gemini_client():

    if not api_key:
        raise RuntimeError(
            "GEMINI_API_KEY가 환경 변수에 설정되어 있지 않습니다."
        )

    return genai.Client(
        api_key=api_key
    )


# ========================================
# API 상태 확인
# ========================================

@app.get("/")
def api_status():

    return {
        "message": "Palette AI API is running"
    }


# ========================================
# 디버그
# ========================================

@app.get("/debug")
def debug():

    return {
        "message": "FastAPI is working",
        "routes": [
            str(route.path)
            for route in app.routes
        ]
    }


# ========================================
# 팔레트 생성
# ========================================

@app.post("/generate")
def generate_palette(
    request: PaletteRequest
):

    prompt = request.prompt.strip()


    # ========================================
    # 입력값 검사
    # ========================================

    if not prompt:

        return {
            "success": False,
            "message": "프롬프트를 입력해주세요."
        }


    # ========================================
    # Gemini 시스템 프롬프트
    # ========================================

    system_prompt = """
당신은 Palette AI의 전문 컬러 디자이너입니다.

사용자의 요청을 분석하여 그림이나 디자인에 사용할 수 있는
5가지 색상의 컬러 팔레트를 만들어주세요.

반드시 아래 JSON 구조를 그대로 사용해야 합니다.

{
  "description": "추천 팔레트에 대한 짧은 설명",
  "colors": [
    {
      "name": "색상 이름",
      "hex": "#000000",
      "role": "Main Color",
      "mood": "색상이 주는 느낌"
    },
    {
      "name": "색상 이름",
      "hex": "#000000",
      "role": "Sub Color",
      "mood": "색상이 주는 느낌"
    },
    {
      "name": "색상 이름",
      "hex": "#000000",
      "role": "Point Color",
      "mood": "색상이 주는 느낌"
    },
    {
      "name": "색상 이름",
      "hex": "#000000",
      "role": "Deep Color",
      "mood": "색상이 주는 느낌"
    },
    {
      "name": "색상 이름",
      "hex": "#000000",
      "role": "Accent Color",
      "mood": "색상이 주는 느낌"
    }
  ]
}

반드시 지켜야 하는 규칙:

1. colors 배열에는 정확히 5개의 색상이 있어야 합니다.
2. 모든 색상은 유효한 HEX 코드여야 합니다.
3. HEX 코드는 반드시 #으로 시작하는 6자리 코드여야 합니다.
4. colors라는 이름을 절대로 변경하지 마세요.
5. name, hex, role, mood 항목을 반드시 모두 포함하세요.
6. JSON 이외의 설명이나 Markdown을 절대로 작성하지 마세요.
"""


    full_prompt = f"""
{system_prompt}

사용자의 요청:

{prompt}
"""


    # ========================================
    # Gemini API 요청
    # ========================================

    try:

        client = get_gemini_client()


        response = client.models.generate_content(

            model="gemini-3.6-flash",

            contents=full_prompt,

            config={
                "response_mime_type": "application/json"
            }

        )


        # ========================================
        # 응답 확인
        # ========================================

        result_text = (
            response.text or ""
        ).strip()


        if not result_text:

            return {
                "success": False,
                "message": "AI가 빈 응답을 반환했습니다."
            }


        # ========================================
        # JSON 변환
        # ========================================

        try:

            result_json = json.loads(
                result_text
            )

        except json.JSONDecodeError:

            return {
                "success": False,
                "message": (
                    "AI 응답을 JSON으로 "
                    "변환할 수 없습니다."
                ),
                "error": result_text
            }


        # ========================================
        # 최상위 구조 검사
        # ========================================

        if not isinstance(
            result_json,
            dict
        ):

            return {
                "success": False,
                "message": (
                    "AI 응답 형식이 올바르지 않습니다."
                )
            }


        if "description" not in result_json:

            return {
                "success": False,
                "message": (
                    "AI 응답에 description "
                    "항목이 없습니다."
                )
            }


        if "colors" not in result_json:

            return {
                "success": False,
                "message": (
                    "AI 응답에 colors "
                    "항목이 없습니다."
                )
            }


        # ========================================
        # colors 검사
        # ========================================

        colors = result_json["colors"]


        if not isinstance(
            colors,
            list
        ):

            return {
                "success": False,
                "message": (
                    "colors 항목이 배열이 아닙니다."
                )
            }


        if len(colors) != 5:

            return {
                "success": False,
                "message": (
                    "색상은 정확히 5개가 필요합니다. "
                    f"현재 {len(colors)}개입니다."
                )
            }


        # ========================================
        # 색상 데이터 검사
        # ========================================

        required_keys = [
            "name",
            "hex",
            "role",
            "mood"
        ]


        hex_pattern = re.compile(
            r"^#[0-9A-Fa-f]{6}$"
        )


        for index, color in enumerate(colors):

            if not isinstance(
                color,
                dict
            ):

                return {
                    "success": False,
                    "message": (
                        f"{index + 1}번째 색상 데이터가 "
                        "올바르지 않습니다."
                    )
                }


            for key in required_keys:

                if key not in color:

                    return {
                        "success": False,
                        "message": (
                            f"{index + 1}번째 색상에 "
                            f"{key} 항목이 없습니다."
                        )
                    }


            # ========================================
            # HEX 코드 검사
            # ========================================

            hex_code = color["hex"]


            if not isinstance(
                hex_code,
                str
            ):

                return {
                    "success": False,
                    "message": (
                        f"{index + 1}번째 색상의 "
                        "HEX 코드가 올바르지 않습니다."
                    )
                }


            if not hex_pattern.match(
                hex_code
            ):

                return {
                    "success": False,
                    "message": (
                        f"{index + 1}번째 색상의 "
                        "HEX 코드 형식이 올바르지 않습니다."
                    )
                }


        # ========================================
        # 성공
        # ========================================

        return {

            "success": True,

            "prompt": prompt,

            "result": json.dumps(
                result_json,
                ensure_ascii=False
            )

        }


    # ========================================
    # 오류 처리
    # ========================================

    except Exception as e:

        return {

            "success": False,

            "message": (
                "AI 요청 중 오류가 발생했습니다."
            ),

            "error": str(e)

        }