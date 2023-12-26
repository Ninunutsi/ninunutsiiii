import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductList from "../../components/Pagination";
import { useProductsContext } from "../../contexts/ProductsContextProvider";

const KidsProducts = () => {
  const { clothes, setCurrentCategory } = useProductsContext();
  const kidsClothes = clothes.filter((prod) => prod.category === "kids");
  const { t } = useTranslation();

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
