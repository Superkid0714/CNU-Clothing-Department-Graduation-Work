import React from 'react';

const MainPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        전시 작품 갤러리
      </h1>

      <div className="mb-12">
        <p className="text-lg text-blue-800 opacity-80 text-center max-w-3xl mx-auto mb-8">
          전남대학교 의류학과 2025 졸업전시 작품들을 감상하실 수 있습니다.
          개인의 정체성과 겹겹이 쌓인 경험의 층위를 의류라는 형태로 표현한
          작품들을 만나보세요.
        </p>
      </div>

      {/* 임시 갤러리 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-50 h-64 rounded-sm flex items-center justify-center hover:shadow-md transition-all duration-300"
          >
            <p className="text-blue-800 font-medium">작품 {item} (개발 중)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
