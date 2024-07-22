import { useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";

function App() {
  const routes = useRoutes([
    { path: "home", element: <HomePage /> },
    { path: "product-list", element: <ProductList /> },
    { path: "product-detail", element: <ProductDetail /> },
  ]);
  return routes;
}

export default App;
