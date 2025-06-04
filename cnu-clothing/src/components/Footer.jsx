import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 mt-16 md:mt-20">
      <div className="px-4 md:px-6 lg:px-16 xl:px-24 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 첫 번째 열: 전시 정보 */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                Parergon: Layered Being
              </h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p>전시 기간: 2025년 6월 11일 - 17일</p>
                <p>장소: 전남대학교 컨벤션홀</p>
              </div>
            </div>

            {/* 두 번째 열: 연락처 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>전라남도 광주시 북구 용봉로 77</p>
                <p>전남대학교 의류학과</p>
                <p>Tel: 062-530-1340</p>
              </div>
            </div>

            {/* 세 번째 열: 링크 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Links
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href="https://clothing.jnu.ac.kr/clothing/index.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-800 transition-colors duration-200 group"
                  >
                    {/* 대학교 아이콘 */}
                    <svg
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                    </svg>
                    <span>전남대학교 의류학과</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/jnu_cat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-200 group"
                  >
                    {/* 인스타그램 아이콘 */}
                    <svg
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 카피라이트 */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              © 2025 Chonnam National University Clothing & Textiles
              Department. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Developed by ECONOVATION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
