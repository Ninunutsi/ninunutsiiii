import { useTranslation } from "react-i18next";
import ProductList from "../../components/Pagination";
import { useProductsContext } from "../../contexts/ProductsContextProvider";

const NewProductsPage = () => {
  const { clothes } = useProductsContext();
  const newClothes = clothes.filter((prod) => prod.result === "new product");

  const { t } = useTranslation();

  return (
    <ProductList
      products={newClothes}
      productsPerPage={20}
      category={t("New products")}
    />
  );
};

export default NewProductsPage;
