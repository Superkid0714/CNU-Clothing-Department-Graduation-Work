import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './previewStyle.css';

// 컴포넌트 불러오기
import PreviewPosterPage from './pages/PreviewPosterPage';
import MainPage from './pages/MainPage';

// 앱 컴포넌트
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 페이지 (포스터) */}
        <Route path="/" element={<PreviewPosterPage />} />
        {/* 메인 페이지 */}
        <Route path="/main" element={<MainPage />} />
        {/* 아티스트 페이지 - 임시 경로 설정 */}
        <Route
          path="/artist/:id"
          element={
            <div className="p-12 text-center">
              아티스트 상세 페이지 (개발 중)
            </div>
          }
        />
        {/* 404 페이지 - 모든 경로에 매치되지 않는 경우 */}
        <Route
          path="*"
          element={
            <div className="p-12 text-center">페이지를 찾을 수 없습니다.</div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

// 루트 렌더링
createRoot(document.getElementById('root')).render(<App />);
