import React from "react";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import BestSellers from "../Layout/BestSellers";
import Kategorien from "../Layout/Kategorien";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";
import { IProduct } from "../Interfaces/IProduct";
import ImageLayout from "../Layout/ImageLayout ";
import { Link } from "react-router-dom";

type Props = {
  products: IProduct[];
};

const HomePage = ({ products }: Props) => {
  const bestSellerProducts = products.slice(0, 4);

  return (
    <>
      <div className="bg-orange-50">
        <Header />
        <Banner />
        <h2 className="text-2xl font-bold ml-20 mt-4 mb-2">
          <Link to={"/product-list"}>ProductList</Link>
        </h2>
        <hr className="bg-orange-900 mb-2" />
        <BestSellers products={bestSellerProducts} />
        <ImageLayout />
        <h2 className="text-2xl font-bold ml-20 mt-4 mb-2">Kategorien</h2>
        <hr className="bg-orange-900 mb-2" />
        <Kategorien />
        <Etwas />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
