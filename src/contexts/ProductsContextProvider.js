import products from "../data/products";
import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [clothes, setClothes] = useLocalStorage("products", products);
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1);
  const [loading, setLoading] = useState(true);

  const addFav = (product) => {
    setClothes((prevState) =>
      prevState.map((cloth) =>
        cloth.id === product.id
          ? { ...cloth, isFavorited: !cloth.isFavorited }
          : cloth
      )
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    setFavorites(clothes.filter((prod) => prod.isFavorited));
  }, [clothes, setFavorites]);

  const contextValue = {
    mainPhoto,
    setMainPhoto,
    addFav,
    favorites,
    clothes,
    currentPage,
    setCurrentPage,
    loading,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  const contextValue = useContext(ProductsContext);
  return contextValue;
};

export default ProductsContextProvider;
