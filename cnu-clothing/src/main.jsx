import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './previewStyle.css';

// 페이지들
import PreviewPosterPage from './pages/PreviewPosterPage';
import ArchivePage from './pages/ArchivePage';
import ArtistsPage from './pages/ArtistsPage';
import WorkDetailPage from './pages/WorkDetailPage';

// 카테고리별 페이지들
import ClothingPage from './pages/categories/ClothingPage';
import TraditionalPage from './pages/categories/TraditionalPage';
import WorksPage from './pages/categories/WorksPage';
import MediaProductionPage from './pages/categories/MediaProductionPage';
import FashionMarketingPage from './pages/categories/FashionMarketingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 포스터 페이지 */}
        <Route path="/" element={<PreviewPosterPage />} />

        {/* 아카이브 페이지 - 메인 역할 */}
        <Route path="/archive" element={<ArchivePage />} />

        {/* 카테고리별 페이지들 */}
        <Route path="/archive/clo" element={<ClothingPage />} />
        <Route path="/archive/traditional" element={<TraditionalPage />} />
        <Route path="/archive/works" element={<WorksPage />} />
        <Route
          path="/archive/media-production"
          element={<MediaProductionPage />}
        />
        <Route
          path="/archive/fashion-marketing"
          element={<FashionMarketingPage />}
        />

        {/* 작품 상세 페이지들 */}
        <Route
          path="/archive/clo/:workId"
          element={<WorkDetailPage category="clo" />}
        />
        <Route
          path="/archive/traditional/:workId"
          element={<WorkDetailPage category="traditional" />}
        />
        <Route
          path="/archive/works/:workId"
          element={<WorkDetailPage category="works" />}
        />
        <Route
          path="/archive/media-production/:workId"
          element={<WorkDetailPage category="media-production" />}
        />
        <Route
          path="/archive/fashion-marketing/:workId"
          element={<WorkDetailPage category="fashion-marketing" />}
        />

        {/* 아티스트 페이지 */}
        <Route path="/artists" element={<ArtistsPage />} />

        {/* 404 페이지 */}
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
