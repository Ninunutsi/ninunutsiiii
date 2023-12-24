import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useProductsContext } from "../contexts/ProductsContextProvider";

const WomanProducts = () => {
  const { sortBy, clothes } = useProductsContext();
  const womanClothes = clothes.filter((prod) => prod.category === "woman");

  const { t } = useTranslation();
  console.log(sortBy)
  return (
    <ProductList
      products={womanClothes}
      productsPerPage={20}
      category={t("Woman")}
    />
  );
};

export default WomanProducts;
