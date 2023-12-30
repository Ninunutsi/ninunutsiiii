import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, useContext, useState, useEffect } from "react";
import { useSearch } from "./SearchFilterContext";
import { useLocation } from "react-router-dom";

const FilterContext = createContext(null);

const FilterContextProvider = ({ children }) => {
  const [, setCurrentPage] = useLocalStorage("currentPage", 1);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [filterByColor, setFilterByColor] = useState("");
  const {filteredData} = useSearch()
  const [filteredProducts, setFilteredProducts] = useState(filteredData)
  const location = useLocation()
  const currentCategory = location.pathname.slice(1)

  useEffect(() => {
    setFilteredProducts(filteredData);
    if (sortByPrice === "low-to-high") {
        setFilteredProducts((prevState) =>
        [...prevState].sort((a, b) => a.price - b.price)
      );
    } else if (sortByPrice === "high-to-low") {
        setFilteredProducts((prevState) =>
        [...prevState].sort((a, b) => b.price - a.price)
      );
    }
    setCurrentPage(1);
  }, [sortByPrice, setCurrentPage, currentCategory, filteredData]);

  useEffect(() => {
    let filteredClothes = filteredData;

    if (filterByColor.length > 0 && filterByColor !== "color") {
      filteredClothes = filteredClothes.filter(
        (product) => product.color === filterByColor
      );
      setCurrentPage(1);
    }

    setFilteredProducts(filteredClothes);
  }, [filterByColor, setCurrentPage, filteredData]);

  const contextValue = {
    setSortByPrice,
    setFilterByColor,
    filteredProducts
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  const contextValue = useContext(FilterContext);
  return contextValue;
};

export default FilterContextProvider;
