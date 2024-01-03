
import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";

const AdminProducts = () => {
  const { t } = useTranslation();
  const {filteredProducts} = useFilterContext()
// ეს პროსტა ჩავსი
  const AdminProducts = filteredProducts.map((prod) => prod);
  
  return (
    <ProductList
      products={AdminProducts}
      productsPerPage={20}
      category={t("allProducts")}
    />
  );
};

export default AdminProducts;
