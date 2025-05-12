import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 필요한 경우 추가 설정 가능
  server: {
    port: 3000, // 원하는 포트 번호로 변경
  },
});
