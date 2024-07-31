import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <header className="relative z-10 bg-lime-700 bg-gradient-to-r from-[rgba(19,83,8,0.39)] to-[rgba(197,201,189,0.79)] w-full ">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
        {/* Search  */}
        <form onSubmit={handleSearch} className="flex-1 mx-40 relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-2 pr-10 rounded text-xs"
            placeholder="Suchen Sie nach Produkten, Marken und mehr"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        {/* EN, Account, and Cart */}
        <div className="flex space-x-4 items-center text-white">
          <div className="flex items-center space-x-2">
            <a href="#">En</a>
            <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
          </div>
          <a href="#" className="flex items-center">
            <i className="fa-regular fa-user"></i>
            <span className="ml-1 hidden lg:inline">Account</span>
          </a>
          <a href="#" className="flex items-center">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="ml-1 hidden lg:inline">Cart</span>
          </a>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto" />
      <nav className="">
        <div className="max-w-7xl mx-auto ml-10 px-4 lg:px-10">
          <ul className="flex flex-wrap space-x-4 text-white py-2">
            <li className="group relative">
              <a href="#">
                Beleuchtung
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Growbox
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
              <div className="absolute hidden group-hover:block bg-white text-black -mt-0.5 rounded shadow-lg ">
                <ul className="px-4 py-2 list-disc">
                  <li className="mx-4 pb-20">
                    <a href="#">Komplettsets</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative">
              <a href="#">
                Dünger
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Erde & Substrate
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Töpfe & Behälter
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
              <div className="absolute hidden group-hover:block bg-white text-black -mt-0.5  rounded shadow-lg">
                <ul className="px-4 py-2 list-disc">
                  <li className="mx-4 py-1">
                    <a href="#">Eckige Töpfe</a>
                  </li>
                  <li className="mx-4 py-1">
                    <a href="#">Runde Töpfe</a>
                  </li>
                  <li className="mx-4 py-1">
                    <a href="#">Untersetzer</a>
                  </li>
                  <li className="mx-4 py-1">
                    <a href="#">Pflanzschalen</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group relative">
              <a href="#">
                Bewässerung
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Pflanzen & Gärtnern
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Lüftung & Klimaanlage
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
