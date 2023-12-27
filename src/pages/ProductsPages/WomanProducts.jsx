import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { useEffect } from "react";

const WomanProducts = () => {
  const { t } = useTranslation();
  const { clothes, setCurrentCategory } = useProductsContext();
  const womanClothes = clothes.filter((prod) => prod.category === "woman");

  useEffect(() => {
    setCurrentCategory("woman");
  }, [womanClothes, setCurrentCategory]);

  return (
    <ProductList
      products={womanClothes}
      productsPerPage={20}
      category={t("Woman")}
    />
  );
};

export default WomanProducts;
