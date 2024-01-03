import FilterContextProvider from "../contexts/FilterContextProvider"
import ProductsContextProvider from "../contexts/ProductsContextProvider"
import { SearchProvider } from "../contexts/SearchFilterContext"
import AddNewProduct from "../pages/AdminPages/AddNewProductPage"
import AdminLogin from "../pages/AdminPages/AdminLoginPage"
import AdminProducts from "../pages/AdminPages/AdminProductsPage"

const adminRoutes = [
{
    path: 'admin',
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
                        <AdminProducts />
                    </FilterContextProvider>
                </SearchProvider>
            </ProductsContextProvider> ,
            path: "products",
        },
        {
            element: <AddNewProduct />,
            path: "add",
        },
    ]
}
]

export default adminRoutes