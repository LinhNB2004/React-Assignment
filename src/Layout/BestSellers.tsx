import React from "react";
import { IProduct } from "../Interfaces/IProduct";
import { Link } from "react-router-dom";

type Props = {
  products: IProduct[];
};

const BestSellers = ({ products }: Props) => {
  return (
    <div className="w-full p-4 bg-white">
      <div className="flex flex-wrap justify-between ml-20 mr-20">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`w-[23%] p-2 relative ${
              index % 4 !== 3 ? "mr-4" : "" // Add margin-right to all but the last item in the row
            }`}
          >
            <Link to={`/product-detail/${product.id}`}>
              <div className="h-[250px] overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full object-cover hover:scale-110 duration-500"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </Link>
            <h3 className="w-full py-2 text-[#665345] font-semibold text-[14px] px-4 my-4">
              {product.title}
            </h3>
            <div className="flex justify-between px-4 pb-2">
              <span className="text-[#777777] text-[12px]">$50000</span>
              <span className="text-[13px]">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
