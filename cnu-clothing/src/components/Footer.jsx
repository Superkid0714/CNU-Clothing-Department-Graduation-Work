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
                <p>런치 이벤트: 6월 11일 오후 3시</p>
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
                <p>Email: clothing@jnu.ac.kr</p>
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
                    href="https://jnu.ac.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    전남대학교
                  </a>
                </div>
                <div>
                  <a
                    href="https://clothing.jnu.ac.kr/clothing/index.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    의류학과
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/jnu_cat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Instagram
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
