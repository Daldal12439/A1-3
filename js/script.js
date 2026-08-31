/* ========================================
   Palette AI
   JavaScript
======================================== */


/* ========================================
   1. HTML 요소 가져오기
======================================== */

const themeInput = document.getElementById("theme");
const moodInput = document.getElementById("mood");
const colorInput = document.getElementById("color");
const purposeInput = document.getElementById("purpose");

const recommendButton = document.getElementById("recommend-button");

const formMessage = document.getElementById("form-message");

const resultSection = document.getElementById("result");
const paletteContainer = document.getElementById("palette");
const resultDescription = document.getElementById("result-description");


/* ========================================
   2. API 주소
======================================== */

const API_URL = "/api";


/* ========================================
   3. 초기 상태
======================================== */

resultSection.style.display = "none";


/* ========================================
   4. 팔레트 추천 함수
======================================== */

async function recommendPalette() {

    const theme = themeInput.value.trim();
    const mood = moodInput.value;
    const preferredColor = colorInput.value;
    const purpose = purposeInput.value;


    /* ========================================
       5. 입력값 검사
    ======================================== */

    if (theme === "") {

        formMessage.textContent =
            "그림의 주제나 내용을 입력해주세요.";

        themeInput.focus();

        return;
    }


    if (mood === "") {

        formMessage.textContent =
            "원하는 분위기를 선택해주세요.";

        moodInput.focus();

        return;
    }


    if (purpose === "") {

        formMessage.textContent =
            "사용 용도를 선택해주세요.";

        purposeInput.focus();

        return;
    }


    formMessage.textContent = "";


    /* ========================================
       6. 버튼 상태 변경
    ======================================== */

    recommendButton.disabled = true;
    recommendButton.textContent = "AI가 팔레트를 생성하고 있어요...";


    resultSection.style.display = "block";

    paletteContainer.innerHTML = `
        <p class="loading-message">
            AI가 어울리는 색상 팔레트를 분석하고 있습니다.
        </p>
    `;

    resultDescription.textContent = "";


    /* ========================================
       7. AI에게 보낼 프롬프트 생성
    ======================================== */

    let prompt = `
당신은 전문적인 색상 팔레트 디자이너입니다.

사용자가 입력한 정보를 바탕으로 그림에 사용할 수 있는
5가지 색상의 조화로운 컬러 팔레트를 추천해주세요.

[그림 주제]
${theme}

[원하는 분위기]
${mood}

[선호 색상]
${preferredColor || "특별히 없음"}

[사용 용도]
${purpose}

다음 조건을 반드시 지켜주세요.

1. 정확히 5개의 색상을 추천해주세요.
2. 각 색상에는 이름을 붙여주세요.
3. 각 색상은 반드시 유효한 HEX 코드로 표현해주세요.
4. 각 색상이 팔레트에서 어떤 역할을 하는지 설명해주세요.
5. 전체 팔레트의 분위기를 짧게 설명해주세요.
6. 반드시 JSON 형식으로만 답변해주세요.

JSON 형식:

{
  "description": "팔레트 전체 설명",
  "colors": [
    {
      "name": "색상 이름",
      "hex": "#000000",
      "role": "색상의 역할",
      "mood": "색상이 주는 느낌"
    }
  ]
}
`;


    /* ========================================
       8. FastAPI 호출
    ======================================== */

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                prompt: prompt
            })

        });


        if (!response.ok) {

            throw new Error(
                `서버 오류 (${response.status})`
            );

        }


        const data = await response.json();


        /* ========================================
           9. API 응답 확인
        ======================================== */

        if (!data.success) {

            throw new Error(
                data.message || "AI 요청에 실패했습니다."
            );

        }


        /* ========================================
           10. AI 응답 JSON 변환
        ======================================== */

        let aiResult;

        try {

            aiResult = JSON.parse(data.result);

        } catch (parseError) {

            const jsonMatch =
                data.result.match(/\{[\s\S]*\}/);

            if (!jsonMatch) {

                throw new Error(
                    "AI가 올바른 JSON 형식으로 응답하지 않았습니다."
                );

            }

            aiResult = JSON.parse(jsonMatch[0]);
        }


        /* ========================================
           11. 결과 검증
        ======================================== */

        if (
            !aiResult.colors ||
            !Array.isArray(aiResult.colors) ||
            aiResult.colors.length === 0
        ) {

            throw new Error(
                "AI 응답에 색상 정보가 없습니다."
            );

        }


        /* ========================================
           12. 결과 표시
        ======================================== */

        displayPalette(aiResult);


    } catch (error) {

        console.error("Palette AI Error:", error);

        paletteContainer.innerHTML = "";

        resultDescription.textContent = "";

        formMessage.textContent =
            `오류가 발생했습니다: ${error.message}`;

        resultSection.style.display = "none";


    } finally {

        recommendButton.disabled = false;

        recommendButton.textContent =
            "AI 팔레트 추천받기";

    }


    /* ========================================
       13. 결과 위치로 이동
    ======================================== */

    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* ========================================
   14. 팔레트 화면 출력
======================================== */

function displayPalette(aiResult) {

    paletteContainer.innerHTML = "";


    aiResult.colors.forEach((color, index) => {

        const colorCard =
            document.createElement("div");

        colorCard.className = "color-card";


        const colorName =
            color.name || `Color ${index + 1}`;

        const colorHex =
            color.hex || "#000000";

        const colorRole =
            color.role || "추천 색상";

        const colorMood =
            color.mood || "";


        colorCard.innerHTML = `
            <div
                class="color-preview"
                style="background-color: ${colorHex};"
            ></div>

            <div class="color-info">

                <strong>
                    ${colorName}
                </strong>

                <span class="color-role">
                    ${colorRole}
                </span>

                <span class="color-code">
                    ${colorHex}
                </span>

                <span class="color-mood">
                    ${colorMood}
                </span>

                <button
                    type="button"
                    class="copy-button"
                    data-color="${colorHex}"
                >
                    색상 코드 복사
                </button>

            </div>
        `;


        paletteContainer.appendChild(colorCard);

    });


    resultDescription.textContent =
        aiResult.description ||
        "AI가 추천한 색상 팔레트입니다.";


    addCopyButtonEvents();
}


/* ========================================
   15. 색상 코드 복사
======================================== */

function addCopyButtonEvents() {

    const copyButtons =
        document.querySelectorAll(".copy-button");


    copyButtons.forEach((button) => {

        button.addEventListener(
            "click",
            async () => {

                const color =
                    button.dataset.color;


                try {

                    await navigator.clipboard.writeText(color);

                    const originalText =
                        button.textContent;

                    button.textContent =
                        "복사 완료!";


                    setTimeout(() => {

                        button.textContent =
                            originalText;

                    }, 1000);


                } catch (error) {

                    alert(
                        "색상 코드 복사에 실패했습니다."
                    );

                }

            }
        );

    });
}


/* ========================================
   16. 추천 버튼 이벤트
======================================== */

recommendButton.addEventListener(
    "click",
    recommendPalette
);