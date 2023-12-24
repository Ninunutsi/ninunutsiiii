import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPage from "../pages/MainPage";
import WomanProducts from "../pages/WomanProducts";
import KidsProducts from "../pages/KidsProducts";
import DetailedProductPage from "../pages/DetailedProductPage";
import { AuthorizationProvider } from "../contexts/AuthorizationContext";
import ErrorPage from "../pages/ErrorPage";
import ProductsContextProvider from "../contexts/ProductsContextProvider";
import FavoritesPage from "../pages/FavoritesPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ReturnPolicyPage from "../pages/ReturnPolicyPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import NewProductsPage from "../pages/NewProductsPage";
import AllProducts from "../pages/AllProducts";
import FilteredPage from "../pages/FilteredPage";

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
        element: <DetailedProductPage />,
        path: "kids/products/:productId",
      },
      {
        element: <FilteredPage />,
        path: "Filtered",
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
