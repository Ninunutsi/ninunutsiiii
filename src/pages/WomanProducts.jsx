import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import { useEffect } from "react";

const WomanProducts = () => {
  const { clothes, setCurrentCategory } = useProductsContext();
  const womanClothes = clothes.filter((prod) => prod.category === "woman");

  const { t } = useTranslation();
  
  useEffect(() => {
    setCurrentCategory("woman")
  }, [womanClothes, setCurrentCategory])

  return (
    <ProductList
      products={womanClothes}
      productsPerPage={20}
      category={t("Woman")}
    />
  );
};

export default WomanProducts;
