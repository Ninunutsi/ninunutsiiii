import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useSearch } from "../../contexts/SearchFilterContext";

const AllProducts = () => {
  const { t } = useTranslation();
  const { filteredData } = useSearch();
  const AllProducts = filteredData.map((prod) => prod);

  return (
    <ProductList
      products={AllProducts}
      productsPerPage={20}
      category={t("All Products")}
    />
  );
};

export default AllProducts;
