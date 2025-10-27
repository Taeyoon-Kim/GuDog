# GuDog
# 🐶 구DOG MVP — AI 기반 반려동물 맞춤 사료 구독 서비스

> AI가 반려견에게 맞는 사료를 추천하고  
> Toss 결제로 정기구독까지 가능한 간단한 MVP 프로젝트

---

## 🚀 기능 요약

| 기능 | 설명 |
|------|------|
| 🧠 **AI 추천** | OpenAI GPT-4o-mini 모델이 반려견의 정보로 맞춤 사료를 추천 |
| 💳 **정기 결제** | Toss Payments API를 통해 실제 결제(정기구독) 시뮬레이션 |
| 🧾 **간단한 UI** | React(Next.js)로 구성된 직관적 입력/추천/결제 화면 |
| ⚙️ **로컬 실행 가능** | 로컬 환경에서 바로 실행 테스트 가능 (백엔드+프론트 완비) |

---

## ⚙️ 사전 준비

1. [OpenAI API 키](https://platform.openai.com/account/api-keys)
2. [Toss Payments 시크릿 키](https://developers.tosspayments.com/)

---

## 🧠 .env 설정 (`/backend/.env`)

```bash
OPENAI_API_KEY=sk-여기에_API키
TOSS_SECRET_KEY=live_sk_여기에_토스키
PORT=4000
