import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewPosterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="w-full max-w-4xl mx-auto px-6 py-12">
        <div className="text-blue-800">
          {/* 헤더 텍스트 */}
          <div className="mb-8">
            <h2 className="text-xl font-medium">CNU Clothing & Textiles</h2>
            <h3 className="text-lg font-medium">2025 Graduation Show</h3>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
            Parergon
            <br />
            Layered Being
          </h1>

          {/* 한글 타이틀 */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
            나를 이루는 외곽선
            <br />그 안의 이야기들
          </h1>

          {/* 설명 텍스트 */}
          <div className="text-lg mb-8 leading-relaxed">
            <p>
              우리는 하나의 선으로 정의되지 않는다,
              <br />
              감정의 여운, 타인의 시선, 흘러간 기억들—
              <br />그 모든 것이 겹겹이 쌓여 지금의 '나'를 이룬다
            </p>
          </div>

          {/* 전시 정보 */}
          <div className="mb-8 space-y-1">
            <p>Launch Event 6/11 3PM</p>
            <p>Exhibition Period 6/11-17 5PM</p>
            <p>
              Location: Chonnam National University
              <br />
              Convention Hall
            </p>
          </div>

          {/* 버튼 */}
          <button
            onClick={() => navigate('/main')}
            className="border-2 border-blue-800 text-blue-800 px-6 py-2 font-medium"
          >
            전시 소개 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPosterPage;
