import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-lime-900 text-white py-8">
      <div className="container ml-40 w-[80%] px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-[12px]   mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
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
            <h3 className="text-lg font-semibold mb-4">Um</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Kontaktiere uns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Karriere
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Unternehmensinformationen
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Hilfe</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Unsere Produzenten
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Zahlung
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Versand
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Stornierung & Rückgabe
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Verstoß melden
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">pOLITIK</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Rücknahmegarantie
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  ffhhhhhhff
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  eeewfhjjjkkk
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
