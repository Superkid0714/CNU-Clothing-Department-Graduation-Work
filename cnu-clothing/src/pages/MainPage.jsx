import React from 'react';

const MainPage = () => {
  return (
    <div className="bg-white">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-banner py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-6 leading-tight">
              Parergon: Layered Being
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 opacity-90 mb-8 leading-relaxed">
              내면의 다층적 자아와 정체성을 탐구하는
              <br />
              전남대학교 의류학과 2025년 졸업작품전
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#highlights"
                className="px-6 py-3 bg-blue-800 text-white text-lg font-medium rounded-sm hover:bg-blue-700 transition-colors shadow-banner-button"
              >
                전시 하이라이트
              </a>
              <a
                href="#concept"
                className="px-6 py-3 border-2 border-blue-800 text-blue-800 text-lg font-medium rounded-sm hover:bg-blue-50 transition-colors"
              >
                전시 컨셉
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 전시 개요 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                  전남대학교 의류학과
                  <br />
                  2025년 졸업작품전
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  '파레르곤(Parergon): 겹쳐진 존재'는 우리의 정체성이 단일하지
                  않고 여러 경험과 관계의 층위로 구성된다는 개념을 탐구합니다.
                  의류라는 매체를 통해 우리를 구성하는 다양한 요소들의
                  상호작용을 시각화합니다.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <span className="w-24 font-medium">일시</span>
                    <span>2025년 6월 11일 - 17일</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-24 font-medium">오프닝</span>
                    <span>2025년 6월 11일 15:00</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-24 font-medium">장소</span>
                    <span>전남대학교 컨벤션홀</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-24 font-medium">참여 학생</span>
                    <span>총 32명</span>
                  </p>
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden shadow-xl h-96 bg-blue-100">
                {/* 이미지 대체 요소 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-blue-800 text-xl font-medium">
                    전시 이미지
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 전시 컨셉 */}
      <section id="concept" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              전시 컨셉
            </h2>
            <p className="text-lg text-gray-700">
              우리의 정체성을 형성하는 여러 층위에 대한 탐구
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 컨셉 1 */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  다층적 정체성
                </h3>
                <p className="text-gray-700">
                  우리 각자는 하나의 선으로 정의되지 않는 복합적인 존재입니다.
                  경험, 관계, 기억이 겹겹이 쌓여 현재의 자아를 형성합니다.
                </p>
              </div>

              {/* 컨셉 2 */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  경계의 모호함
                </h3>
                <p className="text-gray-700">
                  내면과 외면, 자아와 타자, 과거와 현재 사이의 경계는 명확하지
                  않고 끊임없이 변화하며 서로 영향을 주고받습니다.
                </p>
              </div>

              {/* 컨셉 3 */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  시각적 표현
                </h3>
                <p className="text-gray-700">
                  의류와 텍스타일을 통해 보이지 않는 내면의 층위를 시각화하고,
                  다양한 재료와 기법으로 자아의 복합성을 표현합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 전시 하이라이트 */}
      <section id="highlights" className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              전시 하이라이트
            </h2>
            <p className="text-lg text-gray-700">주목할 만한 작품과 프로젝트</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 하이라이트 아이템 1 */}
              <div className="flex flex-col">
                <div className="h-64 bg-blue-100 rounded-sm mb-4 relative overflow-hidden">
                  {/* 이미지 대체 요소 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-blue-800 font-medium">작품 이미지 1</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  외곽선의 변주
                </h3>
                <p className="text-gray-700 mb-3">
                  전통적인 실루엣의 경계를 재해석하여 유동적이고 변화하는 형태를
                  탐구한 작품 시리즈입니다. 내면과 외면의 경계가 모호해지는
                  순간을 포착합니다.
                </p>
                <p className="text-blue-800 font-medium">
                  김지현, 이수민, 박태호
                </p>
              </div>

              {/* 하이라이트 아이템 2 */}
              <div className="flex flex-col">
                <div className="h-64 bg-blue-100 rounded-sm mb-4 relative overflow-hidden">
                  {/* 이미지 대체 요소 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-blue-800 font-medium">작품 이미지 2</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  기억의 직물
                </h3>
                <p className="text-gray-700 mb-3">
                  개인적 기억과 집단적 기억이 교차하는 지점을 특수 직조 기법으로
                  표현한 텍스타일 설치 작품입니다. 관객은 작품 사이를 걸으며
                  다양한 시점을 경험합니다.
                </p>
                <p className="text-blue-800 font-medium">
                  최서연, 정민우, 한지은
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              전시에 참여하세요
            </h2>
            <p className="text-xl opacity-90 mb-8">
              2025년 6월 11일부터 17일까지
              <br />
              전남대학교 컨벤션홀에서 여러분을 기다립니다
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/schedule"
                className="px-8 py-3 bg-white text-blue-800 text-lg font-medium rounded-sm hover:bg-gray-100 transition-colors shadow-md"
              >
                전시 일정 보기
              </a>
              <a
                href="/location"
                className="px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-sm hover:bg-blue-700 transition-colors"
              >
                오시는 길
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
