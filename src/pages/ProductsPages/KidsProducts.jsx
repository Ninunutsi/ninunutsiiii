import ProductList from "../../components/Pagination";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { useFilterContext } from "../../contexts/FilterContextProvider";

const KidsProducts = () => {
  const { t } = useTranslation();
  const { setCurrentCategory, clothes } = useProductsContext();
  const {filteredProducts} = useFilterContext()
  const kidsClothes = filteredProducts ?
  filteredProducts.filter((prod) => prod.category === "kids"):
  clothes.filter((prod) => prod.category === "kids")

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
