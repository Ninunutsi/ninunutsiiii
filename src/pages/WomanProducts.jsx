import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";

const WomanProducts = () => {
  const { clothes } = useDetailedPageContext();
  const womanClothes = clothes.filter((prod) => prod.category === "woman");
  const { t } = useTranslation();

  return (
    <ProductList
      products={womanClothes}
      productsPerPage={20}
      category={t("Woman")}
    />
  );
};

export default WomanProducts;
