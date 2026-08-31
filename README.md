# 🎨 Palette AI

> **AI를 활용한 색채 조합 추천 웹 서비스**

사용자가 그림의 주제, 분위기, 선호 색상, 사용 용도를 입력하면
**Gemini AI가 창작에 활용할 수 있는 5가지 색상의 컬러 팔레트**를 추천해주는 웹 서비스입니다.

---

## 1. 프로젝트 소개

### 프로젝트명

**Palette AI**

### 배포 URL

**https://palette-d3va5rbke-daldal12439.vercel.app/**

### 프로젝트 목적

그림이나 디자인을 제작할 때 작품의 분위기에 맞는 색상을 선정하는 데 어려움을 느끼는 사용자를 위해 제작한 AI 기반 색채 추천 서비스입니다.

사용자가 작품의 주제와 원하는 분위기 등의 정보를 입력하면 Gemini AI가 이를 분석하여 5가지 색상으로 구성된 팔레트를 추천합니다.

추천 결과에는 각 색상의 이름, HEX 코드, 역할, 분위기와 전체 팔레트 설명이 포함됩니다.

### 주요 사용자

* 일러스트를 제작하는 사용자
* 웹툰 및 만화를 제작하는 사용자
* 캐릭터 디자인을 제작하는 사용자
* 배경 디자인을 제작하는 사용자
* 포스터 등 그래픽 작업을 제작하는 사용자

---

# 2. 주요 기능

## 🎨 AI 색채 조합 추천

다음 정보를 입력하면 AI가 작품에 어울리는 5가지 색상을 추천합니다.

* 그림의 주제
* 원하는 분위기
* 선호하는 색상
* 사용 용도

## 🌈 컬러 팔레트 출력

AI가 생성한 결과를 다음 정보와 함께 표시합니다.

* 색상 이름
* HEX 코드
* 색상의 역할
* 색상이 주는 분위기
* 전체 팔레트 설명

## 📋 HEX 코드 복사

각 색상 카드의 **색상 코드 복사** 버튼을 사용하여 HEX 코드를 클립보드에 복사할 수 있습니다.

## 📖 색채 가이드

웹페이지에서 기본적인 색채 조합 방법을 제공합니다.

* 보색
* 유사색
* 포인트 컬러

## ❓ FAQ

추천 색상의 활용 방법과 서비스 사용 방법에 대한 FAQ를 제공합니다.

---

# 3. 화면 구성 및 흐름

서비스는 다음과 같은 화면 흐름으로 구성되어 있습니다.

```text
홈
 ↓
색채 추천 입력
 ↓
그림 주제 입력
 ↓
분위기 선택
 ↓
선호 색상 선택
 ↓
사용 용도 선택
 ↓
AI 팔레트 추천
 ↓
추천 결과 표시
 ↓
색채 가이드 / FAQ
```

상단 내비게이션을 통해 다음 영역으로 이동할 수 있습니다.

* 홈
* 색채 추천
* 색채 가이드
* FAQ

---

# 4. 화면 캡처

## 데스크톱 화면

배포된 웹페이지가 정상적으로 표시되는 것을 확인했습니다.

![Palette AI 데스크톱 화면](docs/screenshots/desktop.png)

## 모바일 화면

반응형 CSS가 적용된 모바일 화면을 확인할 수 있습니다.

![Palette AI 모바일 화면](docs/screenshots/mobile.png)

> 실제 제출 시 브라우저의 개발자 도구에서 모바일 기기를 선택한 후 화면을 캡처하여 `docs/screenshots/mobile.png`로 저장합니다.

---

# 5. 기술 스택

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Python
* FastAPI

## AI

* Google Gemini API

## Deployment

* Vercel

## Version Control

* Git
* GitHub

---

# 6. 프로젝트 구조

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
├── docs/
│   └── screenshots/
│       ├── desktop.png
│       └── mobile.png
│
├── index.html
├── README.md
├── requirements.txt
├── vercel.json
├── .env
└── .gitignore
```

## 파일별 책임

| 파일                 | 역할                                                                   |
| ------------------ | -------------------------------------------------------------------- |
| `index.html`       | 서비스의 화면 구조를 담당합니다. 홈, 색채 추천, 색채 가이드, FAQ 등의 화면을 HTML로 구성합니다.         |
| `css/style.css`    | 색상, 간격, 폰트, 카드, 버튼 등의 시각적 디자인과 반응형 레이아웃을 담당합니다.                      |
| `js/script.js`     | 사용자 입력을 검사하고 `/api/generate`에 요청을 보내며, AI 응답을 받아 팔레트와 설명을 화면에 출력합니다. |
| `api/index.py`     | FastAPI 서버입니다. Gemini API 호출, 입력 검증, AI 응답 JSON 검증, 정적 파일 제공을 담당합니다. |
| `requirements.txt` | Python 실행에 필요한 라이브러리를 관리합니다.                                         |
| `vercel.json`      | Vercel에서 `/api/*` 요청을 FastAPI로 연결하기 위한 라우팅 설정을 담당합니다.                |
| `.env`             | Gemini API 키 등의 민감한 환경 변수를 로컬 개발 환경에서 관리합니다.                         |
| `.gitignore`       | `.env` 등 Git에 업로드하면 안 되는 파일을 제외합니다.                                  |

### 구조를 분리한 이유

HTML, CSS, JavaScript, Backend를 각각 분리하여 관리함으로써 각 파일의 책임을 명확하게 했습니다.

예를 들어 디자인을 수정할 경우 `style.css`만 수정할 수 있고, API 로직을 수정할 경우 `api/index.py`를 수정할 수 있습니다.

또한 Vercel 배포 환경에서도 정적 파일과 API 서버의 역할을 구분할 수 있어 유지보수와 문제 해결이 쉽도록 구성했습니다.

---

# 7. 서비스 동작 과정

```text
사용자 입력
    ↓
JavaScript 입력값 검사
    ↓
프롬프트 생성
    ↓
POST /api/generate
    ↓
FastAPI
    ↓
Gemini API
    ↓
AI JSON 응답
    ↓
FastAPI 응답 검증
    ↓
JavaScript JSON 변환
    ↓
화면에 팔레트 출력
```

---

# 8. Frontend 처리

## 입력값 검사

사용자가 추천 버튼을 누르면 다음 항목을 검사합니다.

### 주제

비어 있는 경우:

```text
그림의 주제나 내용을 입력해주세요.
```

### 분위기

선택하지 않은 경우:

```text
원하는 분위기를 선택해주세요.
```

### 사용 용도

선택하지 않은 경우:

```text
사용 용도를 선택해주세요.
```

### 선호 색상

선호 색상은 선택하지 않아도 사용할 수 있도록 구성했습니다.

---

# 9. API 요청

JavaScript에서 다음 API를 호출합니다.

```text
POST /api/generate
```

요청 데이터:

```json
{
  "prompt": "사용자가 입력한 색채 추천 요청"
}
```

실제 코드에서는 다음과 같이 요청합니다.

```javascript
const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        prompt: prompt
    })
});
```

---

# 10. Backend API

## `GET /api`

FastAPI 서버가 정상적으로 실행되고 있는지 확인합니다.

응답:

```json
{
  "message": "Palette AI API is running"
}
```

---

## `GET /api/debug`

FastAPI의 등록된 라우트와 주요 정적 파일의 존재 여부를 확인합니다.

예:

```json
{
  "message": "FastAPI is working",
  "routes": [
    "/api",
    "/api/debug",
    "/api/generate"
  ]
}
```

---

## `POST /api/generate`

사용자의 프롬프트를 Gemini API로 전달하고 AI가 생성한 색상 팔레트를 반환합니다.

요청:

```json
{
  "prompt": "autumn warm colors"
}
```

성공 응답:

```json
{
  "success": true,
  "prompt": "autumn warm colors",
  "result": "{...}"
}
```

---

# 11. HTTP 상태 코드 정책

| 상황          | HTTP 상태 코드 | 설명                            |
| ----------- | ---------: | ----------------------------- |
| API 정상 응답   |      `200` | 요청을 정상적으로 처리                  |
| 잘못된 JSON 요청 |      `422` | FastAPI/Pydantic 요청 데이터 검증 실패 |
| 존재하지 않는 경로  |      `404` | 요청한 API 또는 페이지가 존재하지 않음       |
| 서버 내부 오류    |      `500` | 예상하지 못한 서버 오류 발생              |

예를 들어 `PaletteRequest`는 다음과 같이 요청 데이터를 검증합니다.

```python
class PaletteRequest(BaseModel):
    prompt: str
```

따라서 `prompt`가 없는 JSON 요청은 FastAPI의 요청 데이터 검증 과정에서 거부됩니다.

---

# 12. AI 응답 검증

Gemini의 응답을 그대로 화면에 출력하지 않고 FastAPI에서 검증합니다.

## 최상위 구조

AI 응답이 객체인지 확인합니다.

## 필수 항목

다음 항목의 존재 여부를 검사합니다.

```text
description
colors
```

## 색상 개수

팔레트는 정확히 5개의 색상을 가져야 합니다.

```text
colors.length == 5
```

## 색상 필수 항목

각 색상은 다음 데이터를 가져야 합니다.

```text
name
hex
role
mood
```

## HEX 검증

정규표현식을 이용해 다음 형식인지 검사합니다.

```text
#[0-9A-Fa-f]{6}
```

예:

```text
#D96B43
#F4E4C1
#A83232
```

---

# 13. AI 프롬프트 설계

Gemini에게 단순히 색상을 생성하도록 요청하는 것이 아니라 일정한 출력 구조를 제공했습니다.

## 프롬프트 설계 원칙

### 1. 역할 지정

Gemini에게 전문 컬러 디자이너 역할을 부여합니다.

```text
당신은 Palette AI의 전문 컬러 디자이너입니다.
```

### 2. 출력 개수 제한

정확히 5개의 색상을 생성하도록 요구합니다.

### 3. 출력 형식 지정

AI 응답을 프로그램에서 처리하기 쉽도록 JSON 구조를 명시합니다.

### 4. 데이터 형식 제한

HEX 코드가 `#`으로 시작하는 6자리 코드가 되도록 요구합니다.

### 5. 색상 역할 지정

각 색상에 Main, Sub, Point, Deep, Accent 등의 역할을 부여합니다.

### 향후 프롬프트 개선

현재 프롬프트에 다음 요소를 추가하면 결과 품질을 더 안정적으로 개선할 수 있습니다.

* 원하는 색온도 지정
* 색상 대비 정도 지정
* 채도 및 명도 범위 지정
* 팔레트 사용 비율 지정
* 좋은 결과와 나쁜 결과의 예시 제공
* 작품 장르별 색채 스타일 예시 제공

---

# 14. 오류 처리

서비스는 입력 단계와 API 단계에서 오류를 처리합니다.

## 입력 오류

```text
그림의 주제나 내용을 입력해주세요.
```

```text
원하는 분위기를 선택해주세요.
```

```text
사용 용도를 선택해주세요.
```

## 로딩 상태

AI 요청 중에는 버튼이 비활성화되고 다음 문구를 표시합니다.

```text
AI가 팔레트를 생성하고 있어요...
```

결과 영역에는 다음과 같은 로딩 메시지가 표시됩니다.

```text
AI가 어울리는 색상 팔레트를 분석하고 있습니다.
```

## AI 빈 응답

Gemini가 빈 응답을 반환하는 경우:

```text
AI가 빈 응답을 반환했습니다.
```

## JSON 변환 오류

AI 응답을 JSON으로 변환할 수 없는 경우 오류를 반환합니다.

## 잘못된 색상 데이터

다음과 같은 경우 오류를 반환합니다.

* colors가 배열이 아닌 경우
* 색상이 5개가 아닌 경우
* 필수 키가 없는 경우
* HEX 코드가 문자열이 아닌 경우
* HEX 코드 형식이 올바르지 않은 경우

---

# 15. 상태 전이

별도의 상태관리 라이브러리를 사용하지 않고 JavaScript의 DOM 상태와 버튼 상태를 이용해 서비스 상태를 관리합니다.

```text
[대기]
   ↓
[입력 검사]
   ↓
[로딩]
   ↓
 ┌───────────────┐
 ↓               ↓
[성공]          [실패]
 ↓               ↓
[결과 표시]     [오류 표시]
 ↓               ↓
[대기 상태]
```

로딩 상태에서는 버튼을 비활성화하여 사용자가 동일한 요청을 반복해서 보내는 것을 방지합니다.

```javascript
recommendButton.disabled = true;
```

요청이 끝나면 `finally`에서 버튼을 다시 활성화합니다.

---

# 16. 입력 테스트

## 테스트 1 - 정상 입력

### 입력

```text
주제: 비 오는 날의 카페
분위기: 따뜻한
선호 색상: 갈색
용도: 일러스트
```

### 예상 결과

* API 요청 성공
* 5개의 색상 반환
* 각 색상에 name, hex, role, mood 존재
* 화면에 색상 카드 출력

---

## 테스트 2 - 빈 입력

### 입력

```text
주제: ""
분위기: 따뜻한
용도: 일러스트
```

### 결과

```text
그림의 주제나 내용을 입력해주세요.
```

API 요청을 보내기 전에 프론트엔드에서 입력을 차단합니다.

---

## 테스트 3 - 긴 입력

### 입력

```text
주제:
가을의 늦은 오후에 오래된 도서관 창가로 따뜻한 햇빛이 들어오고,
책장 사이에 먼지가 천천히 떠다니며 차분하고 포근한 분위기가 느껴지는
판타지 일러스트를 제작하고 싶습니다. 전체적으로 따뜻한 색감을 사용하되
너무 밝거나 강한 색상은 피하고 자연스럽고 깊이 있는 분위기를 원합니다.
```

### 결과

긴 문자열도 `prompt` 문자열로 전달하여 Gemini API에 요청할 수 있습니다.

향후에는 최대 입력 길이를 설정하여 지나치게 긴 입력으로 인한 응답 시간 증가 및 API 비용 증가를 방지할 수 있습니다.

---

# 17. 실제 API 테스트 로그

## 로컬 API 상태 확인

```text
GET /api
→ 200 OK
```

응답:

```json
{
  "message": "Palette AI API is running"
}
```

## 팔레트 생성 테스트

```text
POST /api/generate
→ 200 OK
```

테스트 입력:

```json
{
  "prompt": "autumn warm colors"
}
```

응답에서 다음과 같은 값을 확인했습니다.

```text
success: True
prompt: autumn warm colors
result: AI가 생성한 JSON 형식의 팔레트
```

## Vercel 배포 테스트

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

`/api/debug`를 통해 `/api/generate` 라우트가 정상적으로 등록되어 있는 것을 확인했습니다.

---

# 18. 환경 변수 및 API 키 관리

API 키는 소스 코드에 직접 작성하지 않고 환경 변수로 관리합니다.

로컬 개발 환경에서는 `.env` 파일을 사용합니다.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Python에서는 다음과 같이 불러옵니다.

```python
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
```

## `.gitignore`

`.env` 파일은 Git에 업로드하지 않습니다.

```text
.env
__pycache__/
```

따라서 API 키가 GitHub 저장소에 포함되지 않도록 관리합니다.

---

# 19. 개발 환경과 운영 환경의 환경 변수 관리

## 개발 환경

로컬에서는 프로젝트 루트의 `.env` 파일을 사용합니다.

```text
로컬 PC
 ↓
.env
 ↓
GEMINI_API_KEY
 ↓
FastAPI
```

## 운영 환경

Vercel 배포 환경에서는 프로젝트 설정의 Environment Variables에 API 키를 등록합니다.

운영 환경의 API 키를 소스 코드나 GitHub 저장소에 직접 작성하지 않습니다.

개발 환경과 운영 환경의 키를 분리하면 개발 중 테스트로 인해 운영 API 키가 노출되거나 사용량이 증가하는 문제를 줄일 수 있습니다.

---

# 20. API 키 유출 대응

API 키가 GitHub나 다른 외부 장소에 노출된 경우 다음 순서로 대응합니다.

```text
1. 유출 사실 확인
      ↓
2. 기존 API 키 즉시 폐기
      ↓
3. 새로운 API 키 발급
      ↓
4. Vercel 환경 변수 변경
      ↓
5. 로컬 .env 변경
      ↓
6. GitHub 커밋 및 로그 확인
      ↓
7. 필요할 경우 노출된 키가 사용된 기록 확인
```

재발 방지를 위해 다음 정책을 유지합니다.

* `.env`를 `.gitignore`에 포함
* API 키를 소스 코드에 직접 작성하지 않음
* GitHub에 API 키를 커밋하지 않음
* 운영 환경에서는 Vercel 환경 변수 사용
* 키가 노출되면 기존 키를 폐기하고 재발급

---

# 21. Vercel 배포 설정

프로젝트의 Root Directory:

```text
./
```

Install Command:

```text
pip install -r requirements.txt
```

Build Command:

```text
None
```

Output Directory:

```text
N/A
```

## `vercel.json`

현재 API 요청을 FastAPI로 연결하기 위해 다음과 같은 rewrite 설정을 사용합니다.

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

이를 통해 다음 요청을 FastAPI로 연결합니다.

```text
/api
/api/debug
/api/generate
```

---

# 22. Vercel 배포 문제 해결 과정

개발 과정에서 배포 후 `/` 또는 `/api` 경로가 정상적으로 연결되지 않는 문제가 발생했습니다.

특히 다음과 같은 문제가 발생했습니다.

```text
{"detail":"Not Found"}
```

이를 해결하기 위해 FastAPI에서 직접 정적 파일을 연결했습니다.

```text
/          → index.html
/css       → css/style.css
/js        → js/script.js
/api       → API 상태 확인
/api/debug → 디버그
/api/generate → AI 팔레트 생성
```

## 배포 문제 확인 절차

### 1. Git 상태 확인

```powershell
git status
```

### 2. 최근 커밋 확인

```powershell
git log -3 --oneline
```

### 3. Vercel Build Logs 확인

Vercel 프로젝트의 **Deployments → 해당 배포 → Build Logs**에서 빌드 과정을 확인합니다.

정상적인 경우 다음과 같은 메시지를 확인할 수 있습니다.

```text
Build Completed
Deployment completed
```

### 4. API 상태 확인

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "https://배포주소/api"
```

### 5. 디버그 API 확인

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "https://배포주소/api/debug"
```

### 6. 수정 후 Git push

```powershell
git add .
git commit -m "Fix deployment"
git push
```

GitHub의 `main` 브랜치가 변경되면 Vercel이 새로운 배포를 진행합니다.

---

# 23. 정적 파일 테스트

FastAPI가 HTML뿐 아니라 CSS와 JavaScript도 정상적으로 제공하는지 확인했습니다.

### HTML

```text
GET /
→ 200 OK
```

### CSS

```text
GET /css/style.css
→ 200 OK
```

### JavaScript

```text
GET /js/script.js
→ 200 OK
```

따라서 배포된 웹페이지에서 HTML, CSS, JavaScript를 각각 정상적으로 불러올 수 있도록 구성했습니다.

---

# 24. 응답 시간 및 비용 고려

현재 서비스는 사용자가 요청할 때마다 Gemini API를 호출하는 구조입니다.

따라서 요청 횟수가 증가하면 API 사용량과 비용 또는 무료 사용량 제한에 영향을 줄 수 있습니다.

## 현재 구조

```text
사용자 요청
 ↓
FastAPI
 ↓
Gemini API
 ↓
응답
```

## 응답 시간 개선 방안

향후 다음 방법을 적용할 수 있습니다.

### 1. 요청 캐싱

동일하거나 유사한 요청의 결과를 저장하여 Gemini API를 반복 호출하지 않도록 할 수 있습니다.

```text
동일 요청
 ↓
캐시 확인
 ↓
있음 → 기존 결과 반환
없음 → Gemini API 호출
```

### 2. 모델 선택

서비스 목적에 충분한 성능을 가진 더 빠른 모델을 선택하면 응답 시간을 줄일 수 있습니다.

### 3. 비동기 처리

현재 FastAPI endpoint에서 AI 요청을 수행하고 있습니다.

향후 사용량이 증가할 경우 비동기 처리 및 작업 큐를 도입하여 서버의 요청 처리 구조를 개선할 수 있습니다.

### 4. 입력 길이 제한

너무 긴 프롬프트는 처리 시간이 길어지고 토큰 사용량도 증가할 수 있으므로 적절한 최대 입력 길이를 설정할 수 있습니다.

---

# 25. AI 기능 확장 설계

현재 구조는 다음과 같이 분리되어 있습니다.

```text
Frontend
   ↓
FastAPI
   ↓
AI Provider
```

향후 AI 기능을 확장할 때도 이 구조를 유지하는 것을 목표로 합니다.

## Frontend 확장

향후 다음 기능을 추가할 수 있습니다.

* 팔레트 저장
* 즐겨찾기
* 팔레트 다운로드
* 색상 조합 재생성
* 이미지 업로드
* 이미지에서 색상 추출

## Backend 확장

Backend에는 다음 기능을 추가할 수 있습니다.

```text
/api/generate
/api/history
/api/favorites
/api/analyze-image
```

AI 관련 기능은 별도의 함수 또는 서비스 계층으로 분리하여 특정 AI 모델에 대한 의존도를 낮출 수 있습니다.

## AI Provider 변경

현재 Gemini API를 사용하지만 향후 다른 AI 모델을 사용할 경우에도 다음 구조를 유지할 수 있습니다.

```text
FastAPI
   ↓
AI 서비스 인터페이스
   ↓
Gemini
또는
다른 AI 모델
```

이렇게 구성하면 프론트엔드의 변경을 최소화하면서 AI 모델을 교체할 수 있습니다.

---

# 26. 프레임워크 도입 검토

현재 Frontend는 별도의 프레임워크 없이 HTML, CSS, JavaScript로 구현했습니다.

## 현재 방식의 장점

* 별도의 빌드 도구가 거의 필요하지 않음
* 구조가 단순함
* 작은 규모의 서비스에 적합
* Vercel 정적 배포가 간단함
* HTML/CSS/JavaScript의 동작을 직접 이해하기 쉬움

## 현재 방식의 단점

* 기능이 많아질수록 DOM 조작 코드가 증가할 수 있음
* 상태 관리가 복잡해질 수 있음
* 컴포넌트 재사용이 어려움

## React 등의 프레임워크 도입 시

서비스가 확장되어 상태 관리와 컴포넌트 재사용이 중요해질 경우 React 등의 프레임워크 도입을 고려할 수 있습니다.

예상되는 변경 범위:

```text
index.html
 ↓
React 컴포넌트로 분리

script.js
 ↓
React 상태 및 이벤트 처리로 변경

CSS
 ↓
기존 CSS를 일부 재사용 가능

FastAPI
 ↓
기본 API 구조는 대부분 유지 가능
```

즉, Frontend 구조는 상당 부분 변경되지만 FastAPI의 `/api/generate` API 계약은 유지할 수 있도록 설계하는 것이 목표입니다.

---

# 27. 향후 개선 사항

### 기능 개선

* 추천 팔레트 저장
* 즐겨찾기
* 팔레트 다운로드
* 이미지 기반 색상 분석
* 색상환 기반 추천
* 색상별 상세 설명

### UX 개선

* 입력 글자 수 안내
* 긴 입력 제한
* 더 상세한 로딩 상태 표시
* 오류 메시지 개선
* 모바일 UI 개선

### 성능 개선

* API 결과 캐싱
* 중복 요청 방지
* 입력 길이 제한
* 적절한 AI 모델 선택
* 비동기 처리

### AI 품질 개선

* 프롬프트 예시 추가
* 색온도 조건 추가
* 채도/명도 조건 추가
* 색상 대비 조건 추가
* 장르별 색채 규칙 추가

---

# 28. 테스트 체크리스트

## Frontend

* [x] 주제 입력 검사
* [x] 분위기 선택 검사
* [x] 사용 용도 선택 검사
* [x] 로딩 상태 표시
* [x] 성공 결과 표시
* [x] 실패 메시지 표시
* [x] HEX 코드 복사
* [x] 반응형 CSS 적용

## Backend

* [x] FastAPI 실행
* [x] `/api` 상태 확인
* [x] `/api/debug` 확인
* [x] `/api/generate` POST 요청
* [x] Pydantic 요청 데이터 검증
* [x] Gemini API 호출
* [x] JSON 응답 검증
* [x] 5개 색상 검증
* [x] 필수 키 검증
* [x] HEX 코드 검증

## Deployment

* [x] Vercel 배포
* [x] `/` 접속 확인
* [x] `/api` 접속 확인
* [x] `/api/debug` 접속 확인
* [x] CSS 파일 제공 확인
* [x] JavaScript 파일 제공 확인

---

# 29. 결론

Palette AI는 사용자의 창작 의도를 입력받아 AI가 색채 조합을 추천하는 웹 서비스입니다.

HTML, CSS, JavaScript로 사용자 인터페이스를 구성하고 FastAPI를 통해 Gemini API와 연결했으며, Vercel을 통해 실제 웹 서비스 형태로 배포했습니다.

특히 AI 응답을 그대로 출력하지 않고 다음과 같은 검증 과정을 거치도록 구현했습니다.

```text
Gemini 응답
 ↓
JSON 형식 검사
 ↓
description 검사
 ↓
colors 검사
 ↓
5개인지 검사
 ↓
필수 키 검사
 ↓
HEX 형식 검사
 ↓
사용자에게 출력
```

이를 통해 AI가 예상과 다른 형식의 데이터를 반환하더라도 잘못된 결과가 그대로 화면에 출력되는 것을 방지했습니다.

향후에는 팔레트 저장, 이미지 분석, 캐싱, AI 모델 교체 구조 등을 추가하여 보다 확장성 있는 색채 추천 서비스로 발전시킬 수 있습니다.
