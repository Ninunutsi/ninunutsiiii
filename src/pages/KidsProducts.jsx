import ProductList from "../components/Pagination";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";

const KidsProducts = () => {
  const {clothes} = useDetailedPageContext()
  const kidsClothes = clothes.filter(prod => prod.category === "kids")

  return (
      <ProductList
        products={kidsClothes}
        productsPerPage={20}
      />
    )

};

export default KidsProducts;
