import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    fs: {
      strict: false,
    },
    // 모든 라우트를 index.html로 리다이렉트
    historyApiFallback: true,
  },
  // 정적 자산 처리 설정
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],

  // 프리뷰 모드에서도 히스토리 API 폴백 적용
  preview: {
    historyApiFallback: true,
  },
});
