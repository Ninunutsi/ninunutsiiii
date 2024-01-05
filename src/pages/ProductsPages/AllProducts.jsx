import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";

const AllProducts = () => {
  const { t } = useTranslation();
  const { filteredProducts } = useFilterContext();

  const AllProducts = filteredProducts.map((prod) => prod);

  return (
    <ProductList
      products={AllProducts}
      productsPerPage={20}
      category={t("allProducts")}
    />
  );
};

export default AllProducts;
