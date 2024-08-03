import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";
import BestSellers from "../Layout/BestSellers";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";
import { IProduct } from "../Interfaces/IProduct";
import { ICategory } from "../Interfaces/ICategory";
import { useLocation } from "react-router-dom";

type Props = {
  products: IProduct[];
  categories: ICategory[];
};

const ProductList = ({ products, categories }: Props) => {
  const location = useLocation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("categoryId");
    if (categoryId) {
      setSelectedCategoryId(parseInt(categoryId));
    }
  }, [location]);

  const handleCategoryChange = (categoryId: number) => {
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
  };

  const filteredProducts = selectedCategoryId
    ? products.filter((product) => product.categoryId === selectedCategoryId)
    : products;

  return (
    <>
      <Header />
      <div className="h-[200px] bg-lime-200 bg-gradient-to-r from-[rgba(168,238,196,0.6)] to-[rgb(236,239,229)]">
        <p className="text-[40px] pt-16 pl-40 font-semibold text-gray-700">
          Sản Phẩm
        </p>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-wrap items-center box-shadow border-gray-50 rounded-lg shadow-lg m-4 p-4 bg-lime-50 ${
              selectedCategoryId === category.id
                ? "border-2 border-lime-800"
                : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <img
              src={category.image}
              alt={category.image}
              className="w-[50px] h-[40px]"
            />
            <p className="mt-2 ml-2 text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>

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

      <div className="flex w-full mt-10">
        <div className="flex flex-wrap w-[75%]">
          {filteredProducts.length ? (
            <BestSellers products={filteredProducts} categories={categories} />
          ) : (
            <p className="text-gray-700 text-center w-full mt-10">
              Không có sản phẩm
            </p>
          )}
        </div>

        <div className="w-[25%] p-4 mr-16">
          <div className="text-center text-lime-950 font-bold text-[25px] mb-4">
            Danh mục sản phẩm
          </div>
          <div className="flex flex-col space-y-2 ml-10">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategoryId === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>
          <div className="w-full p-2 relative">
            <div className="h-[300px] overflow-hidden relative">
              <img
                className="h-full w-full object-cover"
                src="../../Ảnh ASM1/annie-spratt-ncQ2sguVlgo-unsplash 1.png"
                alt="Product 4"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
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
          <div className="mt-4">
            <div>
              <p className="font-semibold">Filter By Price</p>
              <hr className="h-[5px] bg-lime-950 border-5 border-solid border-lime-900 rounded-lg my-2" />
              <div className="flex flex-wrap">
                <p>From $0 to $8000</p>
                <span className="ml-12">Filter</span>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Filter By Size</p>
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
