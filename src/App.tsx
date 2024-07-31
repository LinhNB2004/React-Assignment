import React, { useEffect, useState } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import BestSellers from "./Layout/BestSellers";
import { IProduct } from "./Interfaces/IProduct";
import { ICategory } from "./Interfaces/ICategory";
import { GetAllProduct } from "./Service/Product";
import { GetAllCategories } from "./Service/Category";
import SearchResults from "./Layout/SearchResults ";
import CategoryId from "./Layout/CategoryId";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const productsData = await GetAllProduct();
        console.log("Products Data:", productsData);
        setProducts(productsData);

        const categoriesData = await GetAllCategories();
        console.log("Categories Data:", categoriesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    })();
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage products={products} categories={categories} />,
    },
    {
      path: "home",
      element: <HomePage products={products} categories={categories} />,
    },
    {
      path: "product-list",
      element: <ProductList products={products} categories={categories} />,
    },
    {
      path: "product-detail/:id",
      element: <ProductDetail products={products} />,
    },
    {
      path: "search",
      element: <SearchResults products={products} />,
    },
    {
      path: "category/:id",
      element: <CategoryId products={products} categories={categories} />,
    },
  ]);

  return routes;
}

export default App;
