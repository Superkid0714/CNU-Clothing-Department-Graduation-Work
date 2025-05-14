import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PreviewPosterPage from './components/PreviewPosterPage';
// import MainPage from './pages/MainPage'; ← 추후 추가 가능

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<PreviewPosterPage />} />
          {/* <Route path="/main" element={<MainPage />} /> ← 추후 사용 */}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
