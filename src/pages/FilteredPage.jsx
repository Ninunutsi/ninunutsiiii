import { useTranslation } from "react-i18next";
import ProductList from "../components/Pagination";
import { useProductsContext } from "../contexts/ProductsContextProvider";

const FilteredPage = ({ category }) => {
  const { clothes } = useProductsContext();
  const filteredClothes = clothes.filter((prod) => prod.category === category);

  const { t } = useTranslation();

  return (
    <ProductList
      products={filteredClothes}
      productsPerPage={20}
      category={t(`${category}`)}
    />
  );
};

export default FilteredPage;
