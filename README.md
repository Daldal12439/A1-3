# 🎨 Palette AI

> **AI를 활용한 색채 조합 추천 웹 서비스**

사용자가 그림의 주제와 원하는 분위기, 선호 색상, 사용 용도를 입력하면
**Gemini AI가 창작에 활용할 수 있는 5가지 색상의 컬러 팔레트**를 추천해주는 웹 서비스입니다.

---

## 1. 프로젝트 소개

### 프로젝트명

**Palette AI**

### 프로젝트 목적

그림이나 디자인을 제작할 때 어울리는 색상을 직접 선정하는 데 어려움을 느끼는 사용자를 위해,
AI를 활용하여 작품의 주제와 분위기에 적합한 색채 조합을 추천하는 서비스를 제작했습니다.

사용자는 간단한 정보를 입력하고, AI가 생성한 컬러 팔레트와 각 색상의 역할 및 분위기를 확인할 수 있습니다.

---

## 2. 주요 기능

### 🎨 AI 색채 조합 추천

다음 정보를 입력하면 AI가 5가지 색상으로 구성된 팔레트를 생성합니다.

* 그림의 주제
* 원하는 분위기
* 선호하는 색상
* 사용 용도

### 🌈 컬러 팔레트 출력

AI가 생성한 결과를 다음 정보와 함께 화면에 표시합니다.

* 색상 이름
* HEX 코드
* 색상의 역할
* 색상이 주는 분위기
* 전체 팔레트 설명

### 📋 HEX 코드 복사

각 색상 카드의 **색상 코드 복사** 버튼을 통해 HEX 코드를 클립보드에 복사할 수 있습니다.

### 📖 색채 가이드

웹페이지에서 다음과 같은 기본적인 색채 조합 방법을 안내합니다.

* 보색
* 유사색
* 포인트 컬러

### ❓ FAQ

서비스 사용 방법과 AI 추천 결과에 대한 자주 묻는 질문을 제공합니다.

---

## 3. 기술 스택

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* FastAPI

### AI

* Google Gemini API

### 배포

* Vercel

### 개발 및 관리

* Git
* GitHub
* PowerShell

---

## 4. 프로젝트 구조

```text
palette-ai/
│
├── api/
│   └── index.py
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
├── requirements.txt
├── vercel.json
├── .env
└── .gitignore
```

### 주요 파일 설명

| 파일                 | 역할                         |
| ------------------ | -------------------------- |
| `index.html`       | 웹페이지의 전체 HTML 구조           |
| `css/style.css`    | 웹페이지 디자인 및 레이아웃            |
| `js/script.js`     | 사용자 입력 처리 및 API 호출         |
| `api/index.py`     | FastAPI 서버 및 Gemini API 연동 |
| `requirements.txt` | Python 패키지 목록              |
| `vercel.json`      | Vercel 배포 및 API 라우팅 설정     |
| `.env`             | API 키 등 환경 변수 저장           |
| `.gitignore`       | Git에 업로드하지 않을 파일 설정        |

---

## 5. 서비스 동작 과정

```text
사용자 입력
    ↓
주제 / 분위기 / 선호 색상 / 사용 용도
    ↓
JavaScript에서 프롬프트 생성
    ↓
FastAPI `/api/generate` 호출
    ↓
Gemini API 요청
    ↓
AI가 JSON 형식의 색상 팔레트 생성
    ↓
FastAPI에서 응답 검증
    ↓
JavaScript에서 JSON 변환
    ↓
웹페이지에 컬러 팔레트 출력
```

---

## 6. Frontend 동작

사용자가 추천 버튼을 클릭하면 JavaScript에서 입력값을 확인합니다.

### 입력값 검사

* 그림 주제가 비어 있는지 확인
* 분위기가 선택되었는지 확인
* 사용 용도가 선택되었는지 확인
* 선호 색상은 선택하지 않아도 사용할 수 있도록 구성

입력값이 올바르지 않은 경우 사용자에게 안내 메시지를 표시합니다.

### API 요청

JavaScript에서는 다음 API를 호출합니다.

```text
POST /api/generate
```

요청 데이터는 JSON 형태로 전달합니다.

```json
{
  "prompt": "사용자가 입력한 색채 추천 요청"
}
```

---

## 7. Backend 동작

FastAPI를 사용하여 AI API와 프론트엔드 사이의 서버 역할을 구현했습니다.

### API 상태 확인

```text
GET /api
```

정상적으로 서버가 실행되고 있는지 확인할 수 있습니다.

응답 예시:

```json
{
  "message": "Palette AI API is running"
}
```

### 디버그 API

```text
GET /api/debug
```

FastAPI가 정상적으로 작동하는지 확인하고 현재 등록된 API 경로 및 주요 파일의 존재 여부를 확인할 수 있습니다.

### 팔레트 생성 API

```text
POST /api/generate
```

사용자가 입력한 프롬프트를 Gemini API로 전달하고 AI가 생성한 컬러 팔레트를 반환합니다.

---

## 8. AI 응답 검증

AI의 응답을 그대로 사용하는 것이 아니라 FastAPI에서 응답 형식을 검사하도록 구현했습니다.

### 최상위 데이터 검사

AI 응답이 객체 형태인지 확인합니다.

또한 다음 항목이 존재하는지 확인합니다.

* `description`
* `colors`

### 색상 개수 검사

팔레트에는 정확히 **5개의 색상**이 있어야 합니다.

```text
colors.length == 5
```

조건을 만족하지 않으면 오류 메시지를 반환합니다.

### 색상 데이터 검사

각 색상에 다음 항목이 모두 존재하는지 확인합니다.

```text
name
hex
role
mood
```

### HEX 코드 검사

정규표현식을 사용하여 HEX 코드 형식을 검사합니다.

허용되는 형식:

```text
#000000
#FFFFFF
#D96B43
```

다음과 같은 잘못된 형식은 허용하지 않습니다.

```text
000000
#FFF
red
```

---

## 9. Gemini API 사용

Backend에서는 Google Gemini API를 사용하여 컬러 팔레트를 생성합니다.

Gemini에게 다음과 같은 조건을 전달합니다.

* 정확히 5개의 색상 생성
* 각 색상의 이름 제공
* HEX 코드 제공
* 색상의 역할 제공
* 색상이 주는 분위기 제공
* 전체 팔레트 설명 제공
* JSON 형식으로만 응답

Gemini의 응답은 JSON으로 변환한 뒤 서버에서 다시 검증합니다.

---

## 10. 환경 변수

API 키는 소스 코드에 직접 작성하지 않고 `.env` 파일을 사용합니다.

`.env`

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Python에서는 환경 변수를 불러와 Gemini 클라이언트를 생성합니다.

```python
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
```

### API 키를 `.gitignore`에 등록

API 키가 GitHub에 공개되지 않도록 `.env` 파일을 Git 관리 대상에서 제외합니다.

`.gitignore`

```text
.env
__pycache__/
```

API 키가 외부에 노출될 경우 다른 사람이 해당 키를 무단으로 사용할 수 있기 때문에 보안상 중요한 설정입니다.

---

## 11. Python 패키지

`requirements.txt`에 프로젝트 실행에 필요한 패키지를 작성했습니다.

```text
fastapi
uvicorn
python-dotenv
google-genai
```

설치 명령:

```powershell
pip install -r requirements.txt
```

---

## 12. 로컬 실행 방법

### 1. 프로젝트 폴더 이동

```powershell
cd C:\Users\Codyssey\Desktop\palette-ai
```

### 2. 필요한 패키지 설치

```powershell
pip install -r requirements.txt
```

### 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 Gemini API 키를 입력합니다.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

### 4. FastAPI 실행

```powershell
uvicorn api.index:app --reload
```

정상적으로 실행되면 다음 주소에서 API를 확인할 수 있습니다.

```text
http://127.0.0.1:8000
```

---

## 13. API 테스트

### 서버 상태 확인

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:8000/api"
```

정상적인 경우 다음과 같은 응답을 확인할 수 있습니다.

```json
{
  "message": "Palette AI API is running"
}
```

### 팔레트 생성 테스트

PowerShell에서 다음과 같이 테스트할 수 있습니다.

```powershell
$body = '{"prompt":"autumn warm colors"}'

$result = Invoke-RestMethod `
    -Uri "http://127.0.0.1:8000/api/generate" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body

$result
```

정상적으로 실행되면 `success`, `prompt`, `result` 등의 응답을 확인할 수 있습니다.

---

## 14. Vercel 배포

본 프로젝트는 Vercel을 사용하여 배포했습니다.

프로젝트의 Root Directory는 프로젝트 루트로 설정합니다.

```text
./
```

Python 의존성 설치에는 다음 명령을 사용합니다.

```text
pip install -r requirements.txt
```

Vercel에서는 `vercel.json`을 사용하여 API 요청을 FastAPI 파일로 연결합니다.

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/index.py"
    }
  ]
}
```

이를 통해 다음과 같은 요청이 FastAPI로 전달됩니다.

```text
/api
/api/debug
/api/generate
```

---

## 15. 배포 후 테스트

배포된 서비스에서도 API가 정상적으로 동작하는지 확인할 수 있습니다.

### API 상태 확인

```text
GET /api
```

정상적인 응답:

```json
{
  "message": "Palette AI API is running"
}
```

### API 라우팅 확인

```text
GET /api/debug
```

등록된 API 경로를 확인하여 `/api/generate`가 정상적으로 연결되어 있는지 확인할 수 있습니다.

### 웹페이지 확인

서비스의 루트 주소에 접속하면 Palette AI의 전체 웹페이지가 표시됩니다.

```text
/
```

HTML뿐만 아니라 다음 정적 파일도 정상적으로 제공되도록 구성했습니다.

```text
/css/style.css
/js/script.js
```

---

## 16. 오류 처리

서비스 이용 중 발생할 수 있는 오류에 대해 기본적인 예외 처리를 구현했습니다.

### 입력값 오류

사용자가 필수 입력값을 입력하지 않은 경우 프론트엔드에서 안내 메시지를 표시합니다.

### Gemini API 오류

Gemini API 요청 중 오류가 발생하면 서버에서 오류 내용을 확인하고 실패 응답을 반환합니다.

### 빈 AI 응답

AI가 빈 응답을 반환한 경우 다음과 같은 실패 처리를 수행합니다.

```text
AI가 빈 응답을 반환했습니다.
```

### JSON 변환 오류

AI가 JSON 형식으로 응답하지 않은 경우 JSON 변환 실패를 감지합니다.

### 잘못된 색상 데이터

다음과 같은 경우 오류를 반환합니다.

* 색상 데이터가 배열이 아닌 경우
* 색상이 5개가 아닌 경우
* 필수 항목이 없는 경우
* HEX 코드가 문자열이 아닌 경우
* HEX 코드 형식이 올바르지 않은 경우

---

## 17. 프로젝트 테스트 결과

개발 과정에서 로컬 FastAPI 서버와 Vercel 배포 환경에서 API를 테스트했습니다.

### 로컬 API

```text
GET /api
→ 200 OK
```

```text
POST /api/generate
→ 200 OK
```

Gemini API를 통한 팔레트 생성 결과도 정상적으로 반환되는 것을 확인했습니다.

### Vercel

```text
GET /
→ 200 OK
```

```text
GET /api
→ 200 OK
```

```text
GET /api/debug
→ 200 OK
```

또한 배포된 웹페이지에서 HTML, CSS, JavaScript가 정상적으로 연결되는 것을 확인했습니다.

---

## 18. 문제 해결 과정

개발 과정에서 Vercel 배포 시 API 경로와 정적 파일 경로가 정상적으로 연결되지 않는 문제가 발생했습니다.

초기에는 `/` 경로에서 `Not Found`가 발생하거나 웹페이지의 CSS 및 JavaScript가 정상적으로 적용되지 않는 문제가 있었습니다.

이를 해결하기 위해 FastAPI에서 다음 기능을 직접 연결했습니다.

* `/` → `index.html`
* `/css` → CSS 정적 파일
* `/js` → JavaScript 정적 파일
* `/api` → API 상태 확인
* `/api/debug` → 디버그
* `/api/generate` → Gemini API를 이용한 팔레트 생성

또한 `vercel.json`을 사용하여 `/api/*` 요청이 FastAPI의 `api/index.py`로 전달되도록 라우팅을 구성했습니다.

---

