import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// 컴포넌트 불러오기
import PreviewPosterPage from './components/PreviewPosterPage';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ArtistsPage from './pages/ArtistsPage';
import SchedulePage from './pages/SchedulePage';
import LocationPage from './pages/LocationPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

// 앱 컴포넌트
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 페이지 (포스터) */}
        <Route path="/" element={<PreviewPosterPage />} />

        {/* 메인 레이아웃으로 감싸진 페이지들 */}
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="artists" element={<ArtistsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="location" element={<LocationPage />} />
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// 루트 렌더링
createRoot(document.getElementById('root')).render(<App />);
