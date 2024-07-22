import React from "react";
import Header from "../Layout/Header";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <>
      <Header />
      <div className="container w-[80%] mt-10 ml-36">
        <div className="flex flex-wrap">
          {/* ANH SP*/}
          <div className="w-full md:w-1/2 p-4">
            <div className="flex flex-col items-center">
              <img
                src="../../Ảnh ASM1/vsd 1.png"
                alt="Large Product"
                className="w-[40%] mb-4 rounded-lg"
              />

              <div className="flex ml-24 space-x-4">
                <div className="border-2 w-[20%] h-[20%] border-black rounded-lg">
                  <img
                    src="../../Ảnh ASM1/gfree 1.png"
                    alt="Small Product 1"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-[20%] h-[20%]">
                  <img
                    src="../../Ảnh ASM1/gfree 1.png"
                    alt="Small Product 2"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="w-[20%] h-[20%]">
                  <img
                    src="../../Ảnh ASM1/gfree 1.png"
                    alt="Small Product 3"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MO TA SP */}
          <div className="w-full md:w-1/2 p-4">
            <div className="space-y-4">
              <p className="text-lime-900">PLANT</p>
              <h2 className="text-3xl font-bold text-gray-800">
                Square cultivation pots 0.27 to 2 litres
              </h2>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <div className="flex flex-wrap">
                <p className="text-[25px] font-bold text-black">$125.00</p>
                <button className="bg-orange-200 ml-10 px-2 border-5  rounded-lg ">
                  -50%
                </button>
              </div>
              <p className="text-slate-400">$250.000</p>

              <div className="flex flex-wrap">
                <div className=" bg-slate-100 border-5  rounded-lg w-[20%] text-[22px] text-lime-800 font-bold">
                  <button className=" px-3 py-3   ">-</button>
                  <button className=" px-2 py-2  ">5</button>
                  <button className=" px-2 py-2  ">+</button>
                </div>
                <button className="px-6 py-2 w-[250px] bg-lime-800 text-white rounded-lg ml-20">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* MO TA CHI TIET  */}
        <div>
          <div>
            <h2 className="text-xl font-bold">Discription </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled i
            </p>
          </div>
          <br />

          <div>
            <h2 className="text-xl font-bold">About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled i
            </p>
          </div>
        </div>

        {/* DANH GIA  */}
        <div className="mt-10 ml-[10%] w-[80%] flex flex-wrap">
          <div>
            <div className="flex flex-wrap">
              <img src="../../Ảnh ASM1/vsd 1.png" alt="" />
              <div className="mt-[70px] ml-10">
                <div className="flex flex-wrap">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="flex flex-wrap ">
                  <p className="text-[25px] text-lime-600">5.0</p>
                  <p className="mt-3 ml-1 text-[12px]">(388)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-[40%]">
            <button className="bg-lime-800 px-6 py-2 text-white">
              Write reviews
            </button>
          </div>
        </div>

        {/* XET THANG SAO */}
        <div>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap ">
              <p className="text-[24px] mr-2">1</p>
              <i className="fa-solid fa-star mt-2"></i>
              <hr className="h-[14px] w-[400px] bg-slate-500 border-5  mt-3 ml-2" />
              <p className="mt-2 ml-1 text-[12px]">(388)</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap ">
              <p className="text-[24px] mr-2">2</p>
              <i className="fa-solid fa-star mt-2"></i>
              <hr className="h-[14px] w-[150px] bg-slate-400 border-5  mt-3 ml-2" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap ">
              <p className="text-[24px] mr-2">3</p>
              <i className="fa-solid fa-star mt-2"></i>
              <hr className="h-[14px] w-[150px] bg-slate-400 border-5  mt-3 ml-2" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap ">
              <p className="text-[24px] mr-2">4</p>
              <i className="fa-solid fa-star mt-2"></i>
              <hr className="h-[14px] w-[150px] bg-slate-400 border-5  mt-3 ml-2" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap ">
              <p className="text-[24px] mr-2">5</p>
              <i className="fa-solid fa-star mt-2"></i>
              <hr className="h-[14px] w-[150px] bg-slate-400 border-5  mt-3 ml-2" />
            </div>
          </div>
        </div>

        {/* SEE ALL */}

        <div>
          <div className="flex flex-wrap">
            <div className="w-[45%] mr-10">
              <div className="flex flex-wrap mt-36">
                <h2 className="text-[20px] font-bold text-gray-800">
                  Aman gupta
                </h2>

                <div className="flex flex-wrap text-[15px] mt-2 ml-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="text-[12px]">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>

            <div className="w-[50%]">
              <div>
                <div className="flex flex-wrap ">
                  <h2 className="text-[20px] font-bold text-gray-800">
                    Aman gupta
                  </h2>

                  <div className="flex flex-wrap text-[15px] mt-2 ml-4">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <p className="text-[12px]">
                  I've been using this cleanser for about five or six months now
                  and my acne is almost completely gone. I really struggled for
                  years with my skin and tried everything possible but this is
                  the only thing that managed to clear up my skin. 100%
                  recommend and will continue to use is for sure.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap mt-10">
                  <h2 className="text-[20px] font-bold text-gray-800">
                    Aman gupta
                  </h2>

                  <div className="flex flex-wrap text-[15px] mt-2 ml-4">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <p className="text-[12px]">
                  I've been using this cleanser for about five or six months now
                  and my acne is almost completely gone. I really struggled for
                  years with my skin and tried everything possible but this is
                  the only thing that managed to clear up my skin. 100%
                  recommend and will continue to use is for sure.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-lime-700 text-white border-3 mt-4 px-6 py-2 rounded-lg">
              See all
            </button>
          </div>
        </div>
      </div>
      <Etwas />
      <Footer />
    </>
  );
};

export default ProductDetail;
