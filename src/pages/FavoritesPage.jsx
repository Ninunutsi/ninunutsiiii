import { Link } from "react-router-dom";
import ProductList from "../components/Pagination";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";
import { useTranslation } from "react-i18next";

const FavoritesPage = () => {
  const { favorites } = useDetailedPageContext();
  const { t } = useTranslation();

  return (
    <div className="favorites-page">
      {favorites.length > 0 ? (
        <ProductList products={favorites} productsPerPage={8} />
      ) : (
        <div className="favorites-no-products">
          <h2 className="favorites-text">{t("not added")}</h2>
          <Link className="favorites-back-button" to="/">
            {t("Back to Products")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
