import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { worksData, getCategoryName } from '../data/worksData';

const ArtistsPage = () => {
  // 카테고리별로 학생 데이터 생성
  const artistsByCategory = {};

  // 각 카테고리의 작품 데이터를 기반으로 아티스트 정보 생성
  Object.entries(worksData).forEach(([categoryKey, works]) => {
    artistsByCategory[categoryKey] = {
      title: getCategoryName(categoryKey),
      color: getCategoryColor(categoryKey),
      students: works.map((work) => ({
        id: work.id,
        name: work.artist,
        workId: work.id,
      })),
    };
  });

  // 카테고리별 색상 정의
  function getCategoryColor(category) {
    const colors = {
      clo: 'from-blue-500 to-blue-600',
      traditional: 'from-purple-500 to-purple-600',
      works: 'from-green-500 to-green-600',
      'media-production': 'from-red-500 to-red-600',
      'fashion-marketing': 'from-yellow-500 to-yellow-600',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-4 md:px-6 lg:px-16 xl:px-24 pt-4 md:pt-0 pb-12 md:pb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-3 md:mb-4">
            Artists
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
            전남대학교 의류학과 학생들
          </p>

          {/* 분야별 아티스트 섹션 */}
          <div className="space-y-8 md:space-y-12">
            {Object.entries(artistsByCategory).map(
              ([categoryKey, category]) => (
                <section key={categoryKey} className="space-y-4 md:space-y-6">
                  {/* 분야 제목 */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div
                      className={`w-3 h-6 md:w-4 md:h-8 bg-gradient-to-b ${category.color} rounded-full`}
                    ></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                      {category.title}
                    </h3>
                    <span className="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                      {category.students.length}명
                    </span>
                  </div>

                  {/* 학생 카드 그리드 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-4">
                    {category.students.map((student) => (
                      <Link
                        key={student.id}
                        to={`/archive/${categoryKey}/${student.workId}`}
                        className="group block"
                      >
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 md:p-4 hover:border-blue-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          {/* 학생 정보  */}
                          <div className="text-center">
                            <h4 className="text-base md:text-lg font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                              {student.name}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistsPage;
