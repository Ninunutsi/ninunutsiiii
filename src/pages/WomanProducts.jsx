import ProductList from "../components/Pagination";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";

const WomanProducts = () => {
  const {clothes} = useDetailedPageContext()
  const womanClothes = clothes.filter(prod => prod.category === "woman")

  return <ProductList 
      products={womanClothes}
      productsPerPage={20}
    />;
};

export default WomanProducts;
