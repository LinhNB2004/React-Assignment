import React from "react";
import { IProduct } from "../Interfaces/IProduct";
import { Link } from "react-router-dom";
import { ICategory } from "../Interfaces/ICategory";

type Props = {
  products: IProduct[];
  categories: ICategory[]; // Thêm prop categories để chứa danh sách các danh mục
};

const BestSellers = ({ products, categories }: Props) => {
  // Hàm để lấy tên danh mục dựa trên categoryId
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Không rõ danh mục";
  };

  return (
    <div className="w-full p-4 bg-white">
      <div className="flex flex-wrap justify-between ml-20 mr-20">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`w-[23%] p-2 relative ${
              index % 4 !== 3 ? "mr-4" : "" // Thêm margin-right cho tất cả trừ mục cuối cùng trong hàng
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
              <span className="text-[#777777] text-[12px]">
                {getCategoryName(product.categoryId)}
              </span>{" "}
              {/* Hiển thị tên danh mục */}
              <span className="text-[13px]">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
