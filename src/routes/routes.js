import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPage from "../pages/MainPage";
import WomanProducts from "../pages/WomanProducts";
import KidsProducts from "../pages/KidsProducts";
import DetailedProductPage from "../pages/DetailedProductPage";
import { AuthorizationProvider } from "../contexts/AuthorizationContext";
import ErrorPage from "../pages/ErrorPage";
import DetailedPhotoContextProvider from "../contexts/DetailedPhotoContextProvider";
import Subscription from "../components/Subscription";

const routes = [
  {
    element: (
      <div>
        <AuthorizationProvider>
          <Header />
          <DetailedPhotoContextProvider>
            <Outlet />
          </DetailedPhotoContextProvider>
          <Subscription />
          <Footer />
        </AuthorizationProvider>
      </div>
    ),
    path: "/",
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <WomanProducts />,
        path: "woman",
      },
      {
        element: <KidsProducts />,
        path: "kids",
      },
      {
        element: <DetailedProductPage />,
        path: "woman/products/:productId",
      },
      {
        element: <DetailedProductPage />,
        path: "kids/products/:productId",
      },
      {
        element: <ErrorPage />,
        path: "*",
      },
    ],
  },
];

export default routes;
