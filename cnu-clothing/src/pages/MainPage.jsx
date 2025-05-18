import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// 컴포넌트 불러오기
import PreviewPosterPage from './components/PreviewPosterPage';
import GalleryPage from './pages/GalleryPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// 앱 컴포넌트
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 페이지 (포스터) */}
        <Route path="/" element={<PreviewPosterPage />} />

        {/* 작품 갤러리 페이지 */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* 작품 상세 페이지 */}
        <Route path="/artwork/:id" element={<ArtworkDetailPage />} />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// 루트 렌더링
createRoot(document.getElementById('root')).render(<App />);
