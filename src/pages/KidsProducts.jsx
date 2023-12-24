import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";

const KidsProducts = () => {
  const { clothes } = useDetailedPageContext();
  const kidsClothes = clothes.filter((prod) => prod.category === "kids");
  const { t } = useTranslation();

  return (
    <ProductList
      products={kidsClothes}
      productsPerPage={20}
      category={t("Kids")}
    />
  );
};

export default KidsProducts;
