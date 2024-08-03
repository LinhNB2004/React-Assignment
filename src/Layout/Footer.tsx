import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-lime-900 text-white py-8">
      <div className="container ml-40 w-[80%] px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-[12px]   mt-10 pr-[20px]">
              Điều quan trọng là phải chăm sóc bệnh nhân, được bệnh nhân theo
              dõi, nhưng điều đó sẽ xảy ra vào thời điểm có rất nhiều công việc
              và đau đớn.
            </h3>

            <ul className="flex flex-wrap ">
              <li>
                <a href="#" className="hover:underline text-[12px] mr-2">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px] mr-2">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px] mr-2">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Chúng tôi</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Liên hệ chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Sự nghiệp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Thông tin công ty
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Giúp đỡ</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Nhà sản xuất của chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Sự chi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Lô hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Hủy & Trả hàng
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Báo cáo vi phạm
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Chính trị</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Đảm bảo hoàn trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Thư mục trang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full  ">
        <div className="flex flex-wrap ml-44 mt-10 justify-between">
          {/* Small Column 1 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">2023 hood.de , Inc.</p>
          </div>

          {/* Small Column 2 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">
              <img src="../../Ảnh ASM1/icons_payment 1.png" alt="" />
            </p>
          </div>

          {/* Small Column 3 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">Scroll to top</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
