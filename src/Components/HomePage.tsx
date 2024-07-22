import React from "react";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import BestSellers from "../Layout/BestSellers";
import ImageLayout from "../Layout/ImageLayout ";
import Kategorien from "../Layout/Kategorien";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className="bg-orange-50">
        <Header />
        <Banner />
        <h2 className="text-2xl font-bold ml-20 mt-4 mb-2">Best Sellers</h2>
        <hr className="bg-orange-900 mb-2" />
        <BestSellers />
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
