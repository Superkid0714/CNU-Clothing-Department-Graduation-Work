import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const WorkDetailPage = ({ category }) => {
  const { workId } = useParams();
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 실제로는 API나 데이터에서 작품 정보를 가져올 것
  const workData = {
    id: workId,
    title: '작품 제목',
    artist: '학생 이름',
    year: '2025',
    category: category,
    images: [
      `/images/${category}/${workId}-main.jpg`,
      `/images/${category}/${workId}-1.jpg`,
      `/images/${category}/${workId}-2.jpg`,
      `/images/${category}/${workId}-3.jpg`,
      `/images/${category}/${workId}-4.jpg`,
      `/images/${category}/${workId}-5.jpg`,
    ],
    description: `이 작품은 ${category} 카테고리의 졸업작품으로, 
    현대적 감각과 전통적 요소를 결합하여 새로운 시각적 언어를 제시합니다.
    
    작품의 주요 컨셉은...`,
  };

  const getCategoryName = (cat) => {
    const names = {
      clo: '클로',
      traditional: '전통복식',
      works: '작품',
      'media-production': '미디어제작',
      'fashion-marketing': '패션마케팅',
    };
    return names[cat] || cat;
  };

  // 링크 복사 기능
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          {/* 뒤로가기 버튼 */}
          <button
            onClick={() => navigate(`/archive/${category}`)}
            className="flex items-center text-blue-800 hover:text-blue-600 mb-8 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            {getCategoryName(category)}로 돌아가기
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 왼쪽: 이미지 섹션 */}
            <div className="space-y-6">
              {/* 메인 이미지 */}
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={workData.images[selectedImageIndex]}
                  alt={workData.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuuplOyduCDsnbTrr7jsp4A8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>

              {/* 썸네일 이미지들 - 가로 스크롤 */}
              <div className="overflow-x-auto">
                <div className="flex space-x-3 pb-2">
                  {workData.images.map((image, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                        selectedImageIndex === index
                          ? 'ring-2 ring-blue-800 ring-offset-2'
                          : 'hover:opacity-80'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${workData.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7snbTrr7jsp4A8L3RleHQ+PC9zdmc+';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 오른쪽: 작품 정보 */}
            <div className="space-y-8">
              {/* 기본 정보 */}
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                  {getCategoryName(category)}
                </div>
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                  {workData.title}
                </h1>
                <div className="flex items-center text-lg text-gray-600 mb-6">
                  <span>by </span>
                  <span className="font-semibold ml-1">{workData.artist}</span>
                  <span className="mx-3">•</span>
                  <span>{workData.year}</span>
                </div>
              </div>

              {/* 작품 설명 */}
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  작품 소개
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {workData.description}
                </p>
              </div>

              {/* 공유 버튼 */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  {copySuccess ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      링크가 복사되었습니다!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                      링크 복사하기
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes 정의
WorkDetailPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default WorkDetailPage;
