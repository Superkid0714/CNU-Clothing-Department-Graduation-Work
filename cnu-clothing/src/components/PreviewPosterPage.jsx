import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewPosterPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // 페이지 로드 시 실행될 효과
  useEffect(() => {
    // 타이틀 설정
    document.title = 'Parergon: Layered Being - CNU 2025 Graduation Show';

    // 스크롤 최상단으로 이동
    window.scrollTo(0, 0);

    // 로딩 효과
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div
        className={`flex-1 flex flex-col justify-center items-center px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* 상단 텍스트 */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-blue-800">
              CNU Clothing & Textiles
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-blue-800">
              2025 Graduation Show
            </h3>
          </div>

          {/* 메인 타이틀 */}
          <div
            className="space-y-1 mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-blue-800 tracking-tight font-display">
              Parergon
            </h1>
            <h1 className="text-6xl md:text-7xl font-bold text-blue-800 tracking-tight font-display">
              Layered Being
            </h1>
          </div>

          {/* 한글 타이틀 */}
          <div
            className="space-y-1 mb-16 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl md:text-3xl font-medium text-blue-800">
              나를 이루는 외곽선
            </h3>
            <h3 className="text-2xl md:text-3xl font-medium text-blue-800">
              그 안의 이야기들
            </h3>
          </div>

          {/* 설명 텍스트 */}
          <div
            className="mb-16 text-lg md:text-xl leading-relaxed text-blue-800 opacity-80 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="mb-4">우리는 하나의 선으로 정의되지 않는다.</p>
            <p className="mb-4">
              감정의 여운, 타인의 시선, 흘러간 기억들—그 모든 것이 겹겹이 쌓여
              지금의 '나'를 이룬다.
            </p>
            <p className="mb-4">
              이 전시는 그러한 겹들을 의류라는 형태로 풀어낸 기록물이다.
            </p>
            <p className="mb-4">
              옷은 단지 나를 가리는 외피를 넘어 내 안에 남은 감정, 나를 바라보는
              시선, 잊히지 않는 기억들이 쌓여 만들어진 나만의 언어이자 작품을
              인식할 수 있는 액자의 역할을 한다.
            </p>
            <p>
              작품을 통해 우리는 나를 감싸고 있던 것들과 마주하게 된다. 그
              겹들을 하나씩 들춰보며 진짜 '나'를 찾아가는 여정을 떠난다.
            </p>
          </div>

          {/* 전시 정보 */}
          <div
            className="mb-12 text-lg md:text-xl text-blue-800 opacity-90 animate-slide-up"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="mb-1">Launch Event 6/11 3PM</p>
            <p className="mb-1">Exhibition Period 6/11-17 5PM</p>
            <p className="mb-1">Location: Chonnam National University</p>
            <p>Convention Hall</p>
          </div>

          {/* 작품 보기 버튼 */}
          <div
            className="flex justify-center animate-slide-up"
            style={{ animationDelay: '1s' }}
          >
            <button
              onClick={() => navigate('/main')}
              className="group inline-flex flex-col items-center transition-all duration-300 hover:opacity-80"
              aria-label="View Exhibition"
            >
              <span className="text-lg text-blue-800 mb-3 font-medium">
                작품 보기
              </span>
              <svg
                className="w-12 h-12 text-blue-800 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

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
