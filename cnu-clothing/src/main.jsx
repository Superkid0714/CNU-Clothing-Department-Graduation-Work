import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// 컴포넌트 불러오기
import PreviewPosterPage from './components/PreviewPosterPage';

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

// 루트 렌더링
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PreviewPosterPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
