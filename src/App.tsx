import React, { useEffect, useState } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import "./App.css";
import AddCategory from "./Components/Admin/AddCategory";
import AddProduct from "./Components/Admin/AddProduct";
import Dashboard from "./Components/Admin/Dashboard";
import EditCategory from "./Components/Admin/EditCategory";
import EditProduct from "./Components/Admin/EditProduct";
import CategoryList from "./Components/Admin/CategoryList";
import HomePage from "./Components/HomePage";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";
import { IProduct, FormData } from "./Interfaces/IProduct";
import { ICategory, FormCategory } from "./Interfaces/ICategory";
import LayoutAdmin from "./Layout/Admin/LayoutAdmin";
import {
  Add,
  DeleteProduct,
  GetAllProduct,
  UpdateProduct,
} from "./Service/Product";
import {
  AddCategory as AddCategoryService,
  GetAllCategories,
  DeleteCategory,
  EditCategory as EditCategoryService,
} from "./Service/Category";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const productsData = await GetAllProduct();
        console.log("Products Data:", productsData); // Log để kiểm tra dữ liệu
        setProducts(productsData);

        const categoriesData = await GetAllCategories();
        console.log("Categories Data:", categoriesData); // Log để kiểm tra dữ liệu
        setCategories(categoriesData);
      } catch (error) {
        console.error("API Fetch Error:", error); // Log lỗi nếu có
      }
    })();
  }, []);

  // DELETE PRODUCT
  const deleteProduct = async (id: string | number) => {
    if (confirm("Bạn có chắc chắn muốn xóa")) {
      try {
        await DeleteProduct(id);
        alert("Xóa thành công");
        setProducts(products.filter((product: IProduct) => product.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // ADD PRODUCT
  const onAdd = async (data: FormData) => {
    try {
      const product = await Add(data);
      alert("Thêm mới thành công");
      setProducts([...products, product]);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE PRODUCT
  const onUpdate = async (
    data: FormData,
    id: number | string,
    callback: () => void
  ) => {
    try {
      const updatedProduct = await UpdateProduct(data, id);
      alert("Cập nhật thành công");
      const updatedProducts = products.map((product) =>
        product.id === Number(id) ? updatedProduct : product
      );
      setProducts(updatedProducts);
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateSubmit = (data: FormData, id: string) => {
    const convertedData = {
      ...data,
      price: Number(data.price),
      categoryId: Number(data.categoryId),
    };
    onUpdate(convertedData, id, () => navigate("/admin"));
  };

  // ADD CATEGORY
  const onAddCategory = async (data: FormCategory) => {
    try {
      const newCategory = await AddCategoryService(data); // Thêm log cho category mới
      alert("Thêm danh mục thành công");
      setCategories([...categories, newCategory]);
      navigate("/admin/category-list");
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE CATEGORY
  const onUpdateCategory = async (data: FormCategory, id: number | string) => {
    try {
      const updatedCategory = await EditCategoryService(id, data);
      alert("Cập nhật danh mục thành công");
      const updatedCategories = categories.map((category) =>
        category.id === Number(id) ? updatedCategory : category
      );
      setCategories(updatedCategories);
      navigate("/admin/category-list");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE CATEGORY
  const deleteCategory = async (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
      try {
        await DeleteCategory(id);
        alert("Xóa danh mục thành công");
        setCategories(
          categories.filter((category) => category.id !== Number(id))
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const routes = useRoutes([
    { path: "home", element: <HomePage /> },
    { path: "product-list", element: <ProductList /> },
    { path: "product-detail", element: <ProductDetail /> },
    {
      path: "admin",
      element: <LayoutAdmin />,
      children: [
        {
          path: "",
          element: (
            <Dashboard
              products={products}
              categories={categories}
              onDel={deleteProduct}
            />
          ),
        },
        {
          path: "product-add",
          element: <AddProduct onAdd={onAdd} categories={categories} />,
        },
        {
          path: "category-add",
          element: <AddCategory onAdd={onAddCategory} />,
        },
        {
          path: "product-edit/:id",
          element: (
            <EditProduct
              onUpdate={handleUpdateSubmit}
              categories={categories}
              products={products}
            />
          ),
        },
        {
          path: "category-edit/:id",
          element: (
            <EditCategory onUpdate={onUpdateCategory} categories={categories} />
          ),
        },
        {
          path: "category-list",
          element: (
            <CategoryList categories={categories} onDelete={deleteCategory} />
          ),
        },
      ],
    },
  ]);

  return routes;
}

export default App;
