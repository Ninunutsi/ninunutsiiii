import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useProductsContext } from "../contexts/ProductsContextProvider";

const WomanProducts = () => {
  const { clothes } = useProductsContext();
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
