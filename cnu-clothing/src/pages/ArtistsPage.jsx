import React from 'react';
import Header from '../components/Header';

const ArtistsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Artists
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            전남대학교 의류학과 졸업작품 참여 아티스트들
          </p>

          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-blue-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              아티스트 페이지 개발 중
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              졸업작품 참여 아티스트들의 프로필과 작품 소개 페이지를 준비하고
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
