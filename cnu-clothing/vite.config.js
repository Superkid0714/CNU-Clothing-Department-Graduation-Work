import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 명시적으로 public 디렉터리 지정
  server: {
    fs: {
      strict: false, // 파일 시스템 접근 제한 완화
    },
  },
  // 정적 자산 처리 설정
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],
});
