import { useEffect } from "react";
import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import { useProductsContext } from "../../contexts/ProductsContextProvider";

const AllProducts = () => {
  const { t } = useTranslation();
  const {filteredProducts} = useFilterContext()
  const {setCurrentCategory} = useProductsContext()

  const AllProducts = filteredProducts.map((prod) => prod);
  
  useEffect(() => {
    setCurrentCategory("allProducts");
  }, [AllProducts, setCurrentCategory]);

  return (
    <ProductList
      products={AllProducts}
      productsPerPage={20}
      category={t("All Products")}
    />
  );
};

export default AllProducts;
