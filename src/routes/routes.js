import MainPage from "../pages/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import FavoritesPage from "../pages/ProductsPages/FavoritesPage";
import AboutUsPage from "../pages/FooterLinkPages/AboutUsPage";
import ContactUsPage from "../pages/FooterLinkPages/ContactUsPage";
import ReturnPolicyPage from "../pages/FooterLinkPages/ReturnPolicyPage";
import PrivacyPolicyPage from "../pages/FooterLinkPages/PrivacyPolicyPage";
import NewProductsPage from "../pages/ProductsPages/NewProductsPage";
import AllProducts from "../pages/ProductsPages/AllProducts";
import DetailedProductPage from "../pages/ProductsPages/DetailedProductPage";
import ProductsContextProvider from "../contexts/ProductsContextProvider";
import { Outlet } from "react-router-dom";
import { AuthorizationProvider } from "../contexts/AuthorizationContext";
import { SearchProvider } from "../contexts/SearchFilterContext";
import FilterContextProvider from "../contexts/FilterContextProvider";
import ProductsPage from "../pages/ProductsPages/ProductsPage";

const routes = [
  {
    element: (
      <div>
        <AuthorizationProvider>
          <ProductsContextProvider>
            <SearchProvider>
              <FilterContextProvider>
                <Header />
                <Outlet />
                <Footer />
              </FilterContextProvider>
            </SearchProvider>
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
        element: <ProductsPage />,
        path: "woman",
      },
      {
        element: <ProductsPage />,
        path: "kids",
      },
      {
        element: <ProductsPage />,
        path: "banquet",
      },
      {
        element: <ProductsPage />,
        path: "wedding",
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
        element: <DetailedProductPage />,
        path: "banquet/products/:productId",
      },
     
      {
        element: <DetailedProductPage />,
        path: "wedding/products/:productId",
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
