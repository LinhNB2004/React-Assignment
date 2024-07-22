import React from "react";

type Props = {};

const BestSellers = (props: Props) => {
  return (
    <div className="w-full p-4 bg-white">
      <div className="flex justify-between space-x-4 ml-20 mr-20">
        <div className="w-1/4 p-2 relative">
          <div className="h-[250px] overflow-hidden">
            <img
              className="h-full mx-auto object-contain hover:scale-110 duration-500"
              src="../../Ảnh ASM1/michigan_mini_03 1.png"
              alt="Product 1"
            />
          </div>
          <h3 className="w-full py-2  text-[#665345] font-semibold text-[14px] px-4 my-4">
            Growbox
          </h3>
          <div className="flex justify-between px-4 pb-2">
            <span className="text-[#777777] text-[12px]">Dress</span>
            <span className=" text-[13px]">$ 963.85</span>
          </div>
        </div>

        <div className="w-1/4 p-2 relative">
          <div className="h-[250px] overflow-hidden">
            <img
              className="h-full mx-auto object-contain hover:scale-110 duration-500"
              src="../../Ảnh ASM1/hththr 1.png"
              alt="Product 2"
            />
          </div>
          <h3 className="w-full py-2  text-[#665345] font-semibold text-[14px] px-4 my-4">
            Töpfe
          </h3>
          <div className="flex justify-between px-4 pb-2">
            <span className="text-[#777777] text-[12px]">
              5 by 5 pots for planting
            </span>
            <span className=" text-[13px]">$70.00</span>
          </div>
        </div>

        <div className="w-1/4 p-2 relative">
          <div className="h-[250px] overflow-hidden">
            <img
              className="h-full mx-auto object-contain hover:scale-110 duration-500"
              src="../../Ảnh ASM1/hhy 1.png"
              alt="Product 3"
            />
          </div>
          <h3 className="w-full py-2  text-[#665345] font-semibold text-[14px] px-4 my-4">
            Lichthänger-Set
          </h3>
          <div className="flex justify-between px-4 pb-2">
            <span className="text-[#777777] text-[12px]">
              Light-hanger set{" "}
            </span>
            <span className=" text-[13px]">$80.00</span>
          </div>
        </div>

        <div className="w-1/4 p-2 relative">
          <div className="h-[250px] overflow-hidden">
            <img
              className="h-full mx-auto object-contain hover:scale-110 duration-500"
              src="../../Ảnh ASM1/fgrgthht 1.png"
              alt="Product 4"
            />
            <h3 className="absolute top-4 left-0 py-1 px-2 bg-black text-white font-semibold text-[12px]">
              SALE
            </h3>
          </div>
          <h3 className="w-full py-2  text-[#665345] font-semibold text-[14px] px-4 my-4">
            Licht
          </h3>
          <div className="flex justify-between px-4 pb-2">
            <span className="text-[#777777] text-[12px]">Dress</span>
            <span className="line-through text-[13px]">$90.00</span>
            <span className="text-red-700 text-[13px]">$50.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
