import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// 직접 PreviewPosterPage 정의
const PreviewPosterPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* 파란색 곡선 영역 */}
      <div className="absolute top-0 right-0 h-full w-2/5">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M10,0 C-20,30 -20,70 10,100 L100,100 L100,0 Z"
            fill="#0d4c93"
          />
          <path
            d="M15,0 C-15,30 -15,70 15,100 L100,100 L100,0 Z"
            fill="#0d4c93"
            fillOpacity="0.7"
          />
          <path
            d="M20,0 C-10,30 -10,70 20,100 L100,100 L100,0 Z"
            fill="#0d4c93"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="container mx-auto px-6 py-12 h-screen flex items-center">
        <div className="max-w-3xl">
          {/* 헤더 텍스트 */}
          <div className="mb-6 text-blue-900">
            <h2 className="text-xl md:text-2xl font-medium">
              CNU Clothing & Textiles
            </h2>
            <h3 className="text-lg md:text-xl">2025 Graduation Show</h3>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4 leading-tight">
            Parergon
            <br />
            Layered Being
          </h1>

          {/* 한글 타이틀 */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-tight">
            나를 이루는 외곽선,
            <br />그 안의 이야기들
          </h1>

          {/* 설명 텍스트 */}
          <p className="text-blue-900 mb-8 leading-relaxed">
            우리는 하나의 선으로 정의되지 않는다.
            <br />
            감정의 여운, 타인의 시선, 흘러간 기억들—
            <br />그 모든 것이 겹겹이 쌓여 지금의 '나'를 이룬다.
          </p>

          {/* 전시 정보 */}
          <div className="text-blue-900 mb-10">
            <p className="mb-1">
              <span className="font-medium">Launch Event</span>: 6/11 3PM
            </p>
            <p className="mb-1">
              <span className="font-medium">Exhibition Period</span>: 6/11-17
              5PM
            </p>
            <p>
              <span className="font-medium">Location</span>: Chonnam National
              University Convention Hall
            </p>
          </div>

          {/* 버튼 */}
          <button className="bg-blue-800 text-white px-8 py-2 font-medium hover:bg-blue-700">
            전시 소개 보기
          </button>
        </div>
      </div>
    </div>
  );
};

// 임시 MainPage 컴포넌트
const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">
        전시 메인 페이지
      </h1>
      <p className="text-gray-600 mb-8">이 페이지는 아직 개발 중입니다.</p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-800 text-white hover:bg-blue-700 transition"
      >
        돌아가기
      </a>
    </div>
  );
};

// 루트 렌더링 - react-router-dom 사용하지 않음
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PreviewPosterPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
