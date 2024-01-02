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
            element: <AdminProducts />,
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