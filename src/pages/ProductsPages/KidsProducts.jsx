import ProductList from "../../components/Pagination";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";

const KidsProducts = () => {
  const { t } = useTranslation();
  const { clothes, setCurrentCategory } = useProductsContext();
  const kidsClothes = clothes.filter((prod) => prod.category === "kids");

  useEffect(() => {
    setCurrentCategory("kids");
  }, [kidsClothes, setCurrentCategory]);

  return (
    <ProductList
      products={kidsClothes}
      productsPerPage={20}
      category={t("Kids")}
    />
  );
};

export default KidsProducts;
