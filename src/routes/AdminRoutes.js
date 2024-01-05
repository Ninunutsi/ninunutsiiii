import { Outlet } from "react-router-dom"
import FilterContextProvider from "../contexts/FilterContextProvider"
import ProductsContextProvider from "../contexts/ProductsContextProvider"
import { SearchProvider } from "../contexts/SearchFilterContext"
import AddNewProduct from "../pages/AdminPages/AddNewProductPage"
import AdminLogin from "../pages/AdminPages/AdminLoginPage"
import AdminProducts from "../pages/AdminPages/AdminProductsPage"
import { AdminAuthProvider } from "../contexts/AdminAuthContext"
import { ProtectedRoute } from "../components/ProtectedRoute"

const adminRoutes = [
{
    path: 'admin',
    element: <AdminAuthProvider><Outlet /></AdminAuthProvider>,
    children: [
        {
            element: <AdminLogin />,
            index: true,
        },
        {
            element:
            <ProductsContextProvider>
                <SearchProvider>
                    <FilterContextProvider>
                        <ProtectedRoute element={<AdminProducts />} />
                    </FilterContextProvider>
                </SearchProvider>
            </ProductsContextProvider> ,
            path: "products",
        },
        {
            element: <ProtectedRoute element={<AddNewProduct />}/>,
            path: "add",
        },
    ]
}
]

export default adminRoutes