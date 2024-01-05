import { Outlet } from "react-router-dom";
import FilterContextProvider from "../contexts/FilterContextProvider";
import ProductsContextProvider from "../contexts/ProductsContextProvider";
import { SearchProvider } from "../contexts/SearchFilterContext";
import AdminLogin from "../adminPannel/AdminPages/AdminLoginPage";
import AdminProducts from "../adminPannel/AdminPages/AdminProductsPage";
import { AdminAuthProvider } from "../adminPannel/AdminContexts/AdminAuthContext";
import { ProtectedRoute } from "../adminPannel/AdminComponents/ProtectedRoute";
import AddNewProduct from "../adminPannel/AdminPages/AddNewProductPage";
import DetailedProductPage from "../pages/ProductsPages/DetailedProductPage";

const adminRoutes = [
  {
    element: (
      <AdminAuthProvider>
        <Outlet />
      </AdminAuthProvider>
    ),
    path: "admin/",
    children: [
      {
        element: <AdminLogin />,
        index: true,
      },
      {
        element: (
          <ProductsContextProvider>
            <SearchProvider>
              <FilterContextProvider>
                <ProtectedRoute element={<AdminProducts />} />
              </FilterContextProvider>
            </SearchProvider>
          </ProductsContextProvider>
        ),
        path: "products",
      },
      {
        element: <ProtectedRoute element={<DetailedProductPage />} />,
        path: "admin/products/:productId",
      },
      {
        element: <ProtectedRoute element={<AddNewProduct />} />,
        path: "add",
      },
    ],
  },
];

export default adminRoutes;
