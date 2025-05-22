# TUAZAR 기술 블로그

현대적이고 세련된 디자인의 기술 블로그 웹사이트입니다.

## 기술 스택

- **프레임워크**: Next.js 14
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **콘텐츠**: 마크다운 기반 블로그 포스트
- **호스팅**: GitHub Pages

## 주요 기능

- 모던하고 세련된 다크 테마 디자인
- 반응형 레이아웃으로 모든 디바이스에서 최적화된 경험 제공
- 블로그 포스트 검색 및 카테고리 필터링
- 마크다운 기반 블로그 콘텐츠 지원
- GitHub Actions를 통한 자동 배포

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
├── .github/          # GitHub Actions 워크플로우
├── next.config.js    # Next.js 설정
├── tailwind.config.js # TailwindCSS 설정
└── tsconfig.json     # TypeScript 설정
```

## 배포

### 수동 배포

```bash
npm run deploy
```

### GitHub Actions를 통한 자동 배포

메인 브랜치에 푸시하면 `.github/workflows/deploy.yml` 워크플로우를 통해 자동으로 GitHub Pages에 배포됩니다.

## 블로그 포스트 작성하기

1. `src/posts/` 디렉토리에 `.md` 확장자를 가진 마크다운 파일을 생성합니다.
2. 다음과 같은 형식의 YAML 프론트매터를 파일 상단에 추가합니다:

```md
---
title: '포스트 제목'
date: '2023-05-22'
description: '포스트 설명'
tags: ['태그1', '태그2']
---

마크다운 콘텐츠를 여기에 작성합니다...
```

## 라이센스

MIT 라이센스 하에 배포됩니다.