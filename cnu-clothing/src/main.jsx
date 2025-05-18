import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './previewStyle.css';

// 컴포넌트 불러오기
import PreviewPosterPage from './components/PreviewPosterPage';

// 앱 컴포넌트
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 페이지 (포스터) */}
        <Route path="/" element={<PreviewPosterPage />} />
        {/* 다른 페이지들은 나중에 추가 */}
      </Routes>
    </BrowserRouter>
  );
};

// 루트 렌더링
createRoot(document.getElementById('root')).render(<App />);
