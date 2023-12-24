import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useProductsContext } from "../contexts/ProductsContextProvider";

const AllProducts = () => {
  const { clothes } = useProductsContext();
  const AllProducts = clothes.map((prod) => prod);

  const { t } = useTranslation();

  return (
    <ProductList
      products={AllProducts}
      productsPerPage={20}
      category={t("All Products")}
    />
  );
};

export default AllProducts;
