import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const WorkDetailPage = ({ category }) => {
  const { workId } = useParams();
  const navigate = useNavigate();

  // 실제로는 API나 데이터에서 작품 정보를 가져올 것
  const workData = {
    id: workId,
    title: '작품 제목',
    artist: '학생 이름',
    year: '2025',
    category: category,
    mainImage: `/images/${category}/${workId}-main.jpg`,
    images: [
      `/images/${category}/${workId}-1.jpg`,
      `/images/${category}/${workId}-2.jpg`,
      `/images/${category}/${workId}-3.jpg`,
    ],
    description: `이 작품은 ${category} 카테고리의 졸업작품으로, 
    현대적 감각과 전통적 요소를 결합하여 새로운 시각적 언어를 제시합니다.
    
    작품의 주요 컨셉은...`,
    concept: '작품 컨셉 설명',
    materials: '사용된 재료들',
    techniques: '사용된 기법들',
    inspiration: '작품의 영감',
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
                  src={workData.mainImage}
                  alt={workData.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuuplOyduCDsnbTrr7jsp4A8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>

              {/* 추가 이미지들 */}
              <div className="grid grid-cols-3 gap-4">
                {workData.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${workData.title} ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuydtOuvuOyngDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                ))}
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

              {/* 상세 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">컨셉</h4>
                  <p className="text-gray-600 text-sm">{workData.concept}</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">소재</h4>
                  <p className="text-gray-600 text-sm">{workData.materials}</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">기법</h4>
                  <p className="text-gray-600 text-sm">{workData.techniques}</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">영감</h4>
                  <p className="text-gray-600 text-sm">
                    {workData.inspiration}
                  </p>
                </div>
              </div>

              {/* 공유 버튼들 */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-bold text-blue-800 mb-4">공유하기</h4>
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </button>
                  <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                    Pinterest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
