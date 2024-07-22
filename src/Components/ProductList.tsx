import React from "react";
import Header from "../Layout/Header";
import BestSellers from "../Layout/BestSellers";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <>
      <Header />
      <div className="h-[200px] bg-lime-200 bg-gradient-to-r from-[rgba(168,238,196,0.6)] to-[rgb(236,239,229)] ">
        <p className="text-[40px] pt-16 pl-40 font-semibold text-gray-700">
          Töpfe & Behälter
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap mt-10 justify-center">
        <div className="flex flex-wrap items-center box-shadow border-gray-50 rounded-lg shadow-lg m-4 p-4 bg-lime-50">
          <img
            src="../../Ảnh ASM1/htgyr 1.png"
            alt=""
            className="rounded-t-lg"
          />
          <p className="mt-2 ml-2 text-gray-700">Eckige Töpfe</p>
        </div>
        <div className="flex flex-wrap items-center box-shadow border-gray-50 rounded-lg shadow-lg m-4 p-4  bg-lime-50">
          <img
            src="../../Ảnh ASM1/hthrt 1.png"
            alt=""
            className="rounded-t-lg"
          />
          <p className="mt-2 ml-2 text-gray-700">Untersetzer</p>
        </div>
        <div className="flex flex-wrap items-center box-shadow border-gray-50 rounded-lg shadow-lg m-4 p-4  bg-lime-50">
          <img
            src="../../Ảnh ASM1/dedww 1.png"
            alt=""
            className="rounded-t-lg"
          />
          <p className="mt-2 ml-2 text-gray-700">Runde Töpfe</p>
        </div>
        <div className="flex flex-wrap items-center box-shadow border-gray-50 rounded-lg shadow-lg m-4 p-4  bg-lime-50">
          <img
            src="../../Ảnh ASM1/gbfdf 1.png"
            alt=""
            className="rounded-t-lg"
          />
          <p className="mt-2 ml-2 text-gray-700">Pflanzschalen</p>
        </div>
      </div>

      {/* TIM KIEM */}
      <div className="flex justify-between w-[40%] items-center px-10 py-4 ml-20 mt-10">
        <div className="flex items-center">
          <p className="mr-2">Sort By :</p>
          <select className="px-4 py-2 border border-gray-300 rounded">
            <option value="newest">Newest</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="best-sellers">Best Sellers</option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="mr-2">Show :</p>
          <select className="px-4 py-2 border border-gray-300 rounded">
            <option value="default">Default</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      {/* SAN PHAM */}
      <div className="flex w-full mt-10 ">
        <div className=" flex flex-wrap w-full">
          <BestSellers />
          <BestSellers />
        </div>

        {/* DANH MUC*/}
        <div className="w-[25%] p-4 mr-16">
          <div className="text-center text-lime-950 font-bold text-[25px] mb-4">
            Kategorien
          </div>
          <div className="flex flex-col space-y-2 ml-10">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Eckige Töpfe
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Runde Töpfe
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Untersetzer
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Pflanzschalen
            </label>
          </div>
          {/* ANH */}
          <div className="w-full p-2 relative">
            <div className="h-[300px] overflow-hidden  relative">
              <img
                className="h-full w-full object-cover"
                src="../../Ảnh ASM1/annie-spratt-ncQ2sguVlgo-unsplash 1.png"
                alt="Product 4"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              {/* Title and description */}
              <div className="absolute ml-2 inset-0 flex flex-col justify-between p-4">
                <div className="flex flex-col justify-end">
                  <p className="text-[#ffffff] font-semibold text-[20px] mt-1">
                    Grow your own
                  </p>
                  <p className="text-[#ffffff] font-semibold text-[20px] mt-1">
                    favourite plant
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* GIA */}
          <div className="mt-4">
            <div className="">
              <p className="font-semibold ">Filter By Price</p>
              <hr className="h-[5px] bg-lime-950 border-5 border-solid border-lime-900 rounded-lg my-2" />

              <div className="flex flex-wrap">
                <p>From $0 to $8000</p>
                <span className="ml-12">Filter</span>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-semibold ">Filter By Size</p>
              <hr className="h-[5px] bg-lime-950 border-5 border-solid border-lime-900 rounded-lg my-2" />

              <div className="flex flex-wrap">
                <p>2 mm by 50</p>
                <span className="ml-[90px]">Filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Etwas />
      <Footer />
    </>
  );
};

export default ProductList;
