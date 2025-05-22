# TUAZAR 기술 블로그

현대적이고 세련된 디자인의 기술 블로그 웹사이트입니다.

## 기술 스택

- **프레임워크**: Next.js 14
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **콘텐츠**: 마크다운 기반 블로그 포스트

## 주요 기능

- 모던하고 세련된 다크 테마 디자인
- 반응형 레이아웃으로 모든 디바이스에서 최적화된 경험 제공
- 블로그 포스트 검색 및 카테고리 필터링
- 마크다운 기반 블로그 콘텐츠 지원

## 개발 방법

1. 의존성 설치하기
```bash
npm install
```

2. 개발 서버 실행하기
```bash
npm run dev
```

3. 브라우저에서 `http://localhost:3000` 접속하기

## 프로젝트 구조

```
├── public/           # 정적 파일 (이미지, 아이콘 등)
├── src/              # 소스 코드
│   ├── assets/       # 자산 파일
│   ├── components/   # 재사용 가능한 컴포넌트
│   ├── hooks/        # 커스텀 React 훅
│   ├── layouts/      # 레이아웃 컴포넌트
│   ├── pages/        # 페이지 컴포넌트
│   ├── services/     # API 및 서비스 함수
│   ├── styles/       # 글로벌 스타일
│   ├── types/        # TypeScript 타입 정의
│   └── utils/        # 유틸리티 함수
├── next.config.js    # Next.js 설정
├── tailwind.config.js # TailwindCSS 설정
└── tsconfig.json     # TypeScript 설정
```

## 배포

```bash
npm run build
```

그런 다음 생성된 `out` 디렉토리를 웹 서버나 Vercel, Netlify 등의 정적 호스팅 서비스에 배포할 수 있습니다.

## 라이센스

MIT 라이센스 하에 배포됩니다.