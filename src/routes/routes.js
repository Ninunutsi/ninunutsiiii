import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPage from "../pages/MainPage";
import WomanProducts from "../pages/ProductsPages/WomanProducts";
import KidsProducts from "../pages/ProductsPages/KidsProducts";
import DetailedProductPage from "../pages/ProductsPages/DetailedProductPage";
import { AuthorizationProvider } from "../contexts/AuthorizationContext";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import ProductsContextProvider from "../contexts/ProductsContextProvider";
import FavoritesPage from "../pages/ProductsPages/FavoritesPage";
import AboutUsPage from "../pages/FooterLinkPages/AboutUsPage";
import ContactUsPage from "../pages/FooterLinkPages/ContactUsPage";
import ReturnPolicyPage from "../pages/FooterLinkPages/ReturnPolicyPage";
import PrivacyPolicyPage from "../pages/FooterLinkPages/PrivacyPolicyPage";
import NewProductsPage from "../pages/ProductsPages/NewProductsPage";
import AllProducts from "../pages/ProductsPages/AllProducts";
import WeddingProducts from "../pages/ProductsPages/WeddingProducts";
import BanquetProducts from "../pages/ProductsPages/BanquetProducts";

const routes = [
  {
    element: (
      <div>
        <AuthorizationProvider>
          <ProductsContextProvider>
            <Header />
            <Outlet />
            <Footer />
          </ProductsContextProvider>
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
        element: <AllProducts />,
        path: "allProducts",
      },
      {
        element: <NewProductsPage />,
        path: "newProducts",
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
        element: <BanquetProducts />,
        path: "Banquet/products/:productId",
      },
      {
        element: <DetailedProductPage />,
        path: "kids/products/:productId",
      },
      {
        element: <DetailedProductPage />,
        path: "Banquet/products/:productId",
      },
      {
        element: <WeddingProducts />,
        path: "Filtered",
      },
      {
        element: <DetailedProductPage />,
        path: "Wedding/products/:productId",
      },
      {
        element: <FavoritesPage />,
        path: "favorites",
      },
      {
        element: <AboutUsPage />,
        path: "aboutUs",
      },
      {
        element: <ContactUsPage />,
        path: "contact",
      },
      {
        element: <ReturnPolicyPage />,
        path: "returnPolicy",
      },
      {
        element: <PrivacyPolicyPage />,
        path: "privacyPolicy",
      },
      {
        element: <ErrorPage />,
        path: "*",
      },
    ],
  },
];

export default routes;
