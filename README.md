# CNU Clothing & Textiles 2025 Graduation Show: Parergon - Layered Being

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8843e02c-6419-4fd6-a578-0b97017b38d8" />

이 프로젝트는 전남대학교 의류학과 2025년 졸업 작품 전시회인 "Parergon: Layered Being"을 위한 웹사이트입니다 
학생들의 다양한 작품을 전시하고, 각 작품에 대한 상세 정보와 아티스트 정보를 제공합니다

## 🚀 주요 기능

- **작품 전시**: 의류, 전통복식, 작품, 미디어 제작, 패션 마케팅 등 다양한 카테고리의 졸업 작품을 전시합니다
- **작품 상세 페이지**: 각 작품의 제목, 작가, 설명, 이미지 및 비디오를 상세하게 보여줍니다
- **아티스트 페이지**: 참여 학생들의 목록과 각 학생의 작품으로 연결되는 링크를 제공합니다
- **반응형 디자인**: 모바일 및 데스크탑 환경에서 최적화된 사용자 경험을 제공합니다
- **포스터 미리보기 페이지**: 전시회 시작 전 포스터 및 전시 정보를 보여주는 페이지를 제공합니다

## 🛠️ 기술 스택

- **프레임워크**: React 19.1.0
- **빌드 도구**: Vite
- **상태 관리**: @tanstack/react-query
- **HTTP 클라이언트**: Axios
- **라우팅**: React Router DOM
- **스타일링**: Tailwind CSS, PostCSS, Autoprefixer
- **린팅/포맷팅**: ESLint, Prettier

## 📂 프로젝트 구조

```
cnu-clothing/
├── public/
│   ├── clothing/             # 의류 작품 이미지
│   ├── fashion-marketing/    # 패션 마케팅 작품 이미지 및 자료
│   ├── media-production/     # 미디어 제작 작품 이미지 및 자료
│   ├── traditional/          # 전통 복식 작품 이미지
│   └── works/                # 일반 작품 이미지 및 비디오
├── src/
│   ├── components/           # 재사용 가능한 UI 컴포넌트 (Header, Footer, ImageGallery 등)
│   ├── data/                 # 작품 데이터 (worksData.js)
│   ├── pages/                # 주요 페이지 컴포넌트
│   │   ├── categories/       # 카테고리별 작품 목록 페이지
│   │   ├── ArchivePage.jsx   # 아카이브 메인 페이지
│   │   ├── ArtistsPage.jsx   # 아티스트 목록 페이지
│   │   ├── PreviewPosterPage.jsx # 전시회 포스터 미리보기 페이지
│   │   └── WorkDetailPage.jsx # 작품 상세 페이지
│   ├── index.css             # 전역 스타일
│   ├── main.jsx              # 애플리케이션 진입점
│   └── previewStyle.css      # 포스터 미리보기 페이지 전용 스타일
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## ⚙️ 설치 및 실행

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요

1.  **저장소 클론**:

    ```bash
    git clone https://github.com/Superkid0714/Clothing-Department-Graduation-Work.git
    cd Clothing-Department-Graduation-Work/cnu-clothing
    ```

2.  **의존성 설치**:

    ```bash
    npm install
    ```

3.  **개발 서버 실행**:

    ```bash
    npm run dev
    ```

4.  **프로덕션 빌드**:
    ```bash
    npm run build
    ```
