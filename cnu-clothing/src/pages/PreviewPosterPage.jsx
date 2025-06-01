import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../previewStyle.css';

const PreviewPosterPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Parergon: Layered Being - CNU 2025 Graduation Show';
    // 즉시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    // body와 html의 스크롤도 초기화
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // 컴포넌트가 마운트될 때 강제로 스크롤 위치 초기화
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    scrollToTop();
    // 약간의 지연 후 한 번 더 실행 (페이지 로딩 완료 후)
    const timer = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 상단 여백: 모바일 32px, 데스크탑 64px */}
      <div className="w-full h-8 md:h-16"></div>

      <div
        className={`w-full flex flex-col items-center px-4 md:px-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* 상단 텍스트 */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-blue-800">
              CNU Clothing & Textiles
            </h2>
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-blue-800">
              2025 Graduation Show
            </h3>
          </div>

          {/* 메인 타이틀 */}
          <div className="space-y-1 mb-8 md:mb-10 animate-fade-in delay-200">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-800 tracking-tight font-display">
              Parergon
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-800 tracking-tight font-display">
              Layered Being
            </h1>
          </div>

          {/* 한글 타이틀 + 부제 */}
          <div className="animate-fade-in delay-400 text-blue-800 mb-6 md:mb-8">
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                나를 이루는 외곽선
              </h3>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                그 안의 이야기들
              </h3>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className="mb-12 md:mb-16 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-blue-800 opacity-80 max-w-2xl mx-auto animate-slide-up delay-600">
            <p className="mb-6 md:mb-8">
              우리는 하나의 선으로 정의되지 않는다.
            </p>
            <p className="mb-3 md:mb-4">
              감정의 여운, 타인의 시선, 흘러간 기억들
              <br />그 모든 것이 겹겹이 쌓여 지금의 &lsquo;나&rsquo;를 이룬다.
            </p>
            <p className="mb-3 md:mb-4">
              이 전시는 그러한 겹들을
              <br />
              의류라는 형태로 풀어낸 기록물이다.
            </p>
            <p className="mb-3 md:mb-4">
              옷은 단지 나를 가리는 외피를 넘어
              <br />
              내 안에 남은 감정, 나를 바라보는 시선,
              <br />
              잊히지 않는 기억들이 쌓여
              <br />
              만들어진 나만의 언어이자
              <br />
              작품을 인식할 수 있는 액자의 역할을 한다.
            </p>
            <p className="mb-3 md:mb-4">
              작품을 통해 우리는 나를 감싸고 있던 것들과 마주하게 된다.
              <br />그 겹들을 하나씩 들춰보며 진짜 &lsquo;나&rsquo;를 찾아가는
              여정을 떠난다.
            </p>
          </div>

          {/* 전시 정보 */}
          <div className="mb-10 md:mb-12 text-sm md:text-base lg:text-lg text-blue-800 opacity-90 animate-slide-up delay-800">
            <p className="mb-1">Launch Event | June 11 3:00 PM</p>
            <p className="mb-1">Exhibition Period | June 11 – 17, 5:00 PM</p>
            <p className="mb-1">
              Location | Chonnam National University Convention Hall
            </p>
          </div>

          {/* 작품 보기 버튼 */}
          <div className="flex justify-center animate-slide-up delay-1000 mb-8 md:mb-0">
            <button
              onClick={() => navigate('/archive')}
              className="group inline-flex flex-col items-center transition-all duration-300 hover:opacity-80"
              aria-label="View Exhibition"
            >
              <span className="text-base md:text-lg text-blue-800 mb-2 md:mb-3 font-medium">
                작품 보기
              </span>
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-blue-800 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="py-4 text-center text-xs sm:text-sm md:text-base text-blue-800 opacity-70">
        <p>
          © 2025 Chonnam National University Clothing & Textiles Department
        </p>
      </footer>
    </div>
  );
};

export default PreviewPosterPage;
