import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import MainPage from "../pages/MainPage";
import ProductsListPage from "../pages/ProductsListPage";

const routes = [
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <br></br>
        <Footer />
      </div>
    ),
    path: "/",
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <ProductsListPage />,
        path: "products",
      },
    ],
  },
];

export default routes;
