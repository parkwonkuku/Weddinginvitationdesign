# 결혼 청첩장 웹사이트

박원국 ♥ 김지민의 결혼을 축하해주세요!

## 🌸 프로젝트 소개

이 프로젝트는 React와 Tailwind CSS로 제작된 웹 기반 결혼 청첩장입니다.

## 🚀 GitHub Pages 배포 방법

### 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. 우측 상단의 `+` 버튼 클릭 → `New repository` 선택
3. 저장소 이름 입력 (예: `wedding-invitation`)
4. **Public**으로 설정
5. `Create repository` 클릭

### 2단계: 로컬에서 코드 업로드

터미널을 열고 프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
# Git 초기화 (처음 한 번만)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Wedding invitation website"

# GitHub 저장소와 연결 (본인의 사용자명과 저장소명으로 변경)
git remote add origin https://github.com/사용자명/저장소명.git

# 메인 브랜치로 설정
git branch -M main

# GitHub에 업로드
git push -u origin main
```

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. 상단 메뉴에서 `Settings` 클릭
3. 왼쪽 사이드바에서 `Pages` 클릭
4. **Source** 섹션에서:
   - Source를 `GitHub Actions`로 선택
5. 자동으로 배포가 시작됩니다!

### 4단계: 웹사이트 확인

- 배포가 완료되면 (약 1-2분 소요)
- GitHub Pages URL이 생성됩니다: `https://사용자명.github.io/저장소명/`
- Actions 탭에서 배포 진행 상황을 확인할 수 있습니다

## 📝 저장소 이름에 따른 URL 변경

만약 저장소 이름이 `wedding-invitation`이 아니라면, `vite.config.ts` 파일의 `base` 값을 수정해야 합니다:

```typescript
// 저장소명이 wedding-invitation인 경우
base: '/wedding-invitation/'

// 사용자명.github.io 저장소를 사용하는 경우
base: '/'
```

수정 후 다시 커밋하고 푸시하세요:

```bash
git add .
git commit -m "Update base URL"
git push
```

## 🛠️ 로컬에서 실행하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev

# 빌드
pnpm run build
```

## 💡 문제 해결

### 배포 후 빈 페이지가 나올 때
- `vite.config.ts`의 `base` 경로를 확인하세요
- 저장소 이름과 일치해야 합니다

### Actions 권한 오류가 발생할 때
1. Settings → Actions → General
2. Workflow permissions를 "Read and write permissions"로 변경

## 📞 문의

궁금한 사항이 있으시면 이슈를 등록해주세요!

---

Made with ❤️ for 원국 & 지민
