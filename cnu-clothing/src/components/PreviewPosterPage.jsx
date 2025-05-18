import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewPosterPage = () => {
  const navigate = useNavigate();

  // 페이지 로드 시 실행될 효과
  useEffect(() => {
    // 타이틀 설정
    document.title = 'Parergon: Layered Being - CNU 2025 Graduation Show';

    // 스크롤 최상단으로 이동
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 상단 장식 요소 */}
      <div className="h-2 bg-gradient-to-r from-blue-800 to-blue-600"></div>

      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-4xl">
            {/* 상단 텍스트 */}
            <div className="mb-10 opacity-90">
              <h2 className="text-xl md:text-2xl font-medium text-blue-800">
                CNU Clothing & Textiles
              </h2>
              <h3 className="text-lg md:text-xl font-medium text-blue-800">
                2025 Graduation Show
              </h3>
            </div>

            {/* 메인 타이틀 */}
            <div className="space-y-1 mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-blue-800 tracking-tight">
                Parergon
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold text-blue-800 tracking-tight">
                Layered Being
              </h1>
            </div>

            {/* 한글 타이틀 */}
            <div className="space-y-1 mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800 tracking-tight">
                나를 이루는 외곽선
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800 tracking-tight">
                그 안의 이야기들
              </h1>
            </div>

            {/* 설명 텍스트 */}
            <div className="mb-12 text-lg md:text-xl leading-relaxed text-blue-800 opacity-90">
              <p className="mb-1">우리는 하나의 선으로 정의되지 않는다,</p>
              <p className="mb-1">감정의 여운, 타인의 시선, 흘러간 기억들—</p>
              <p>그 모든 것이 겹겹이 쌓여 지금의 '나'를 이룬다</p>
            </div>

            {/* 전시 정보 */}
            <div className="mb-12 text-lg md:text-xl text-blue-800 opacity-90">
              <p className="mb-1">Launch Event 6/11 3PM</p>
              <p className="mb-1">Exhibition Period 6/11-17 5PM</p>
              <p className="mb-1">Location: Chonnam National University</p>
              <p>Convention Hall</p>
            </div>

            {/* 버튼 */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigate('/main')}
                className="px-8 py-3 bg-blue-800 text-white text-lg font-medium rounded-sm hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                전시 소개 보기
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/cnu_clothing/',
                    '_blank'
                  )
                }
                className="px-8 py-3 border-2 border-blue-800 text-blue-800 text-lg font-medium rounded-sm hover:bg-blue-50 transition-colors duration-300"
              >
                Instagram 방문하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 장식 요소 */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>

      {/* 푸터 */}
      <footer className="py-4 text-center text-sm text-blue-800 opacity-70">
        <p>
          © 2025 Chonnam National University Clothing & Textiles Department
        </p>
      </footer>
    </div>
  );
};

export default PreviewPosterPage;
