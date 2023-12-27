import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterContextProvider";

const WomanProducts = () => {
  const { t } = useTranslation();
  const { setCurrentCategory, clothes } = useProductsContext();
  const {filteredProducts} = useFilterContext()
  
  const womanClothes = filteredProducts ? 
  filteredProducts.filter((prod) => prod.category === "woman") :
  clothes.filter((prod) => prod.category === "woman")

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
