import products from "../data/products";
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(products);

  const handleFilter = () => {
    if (search === "") {
      setFilteredData(products);
    } else {
      const filteredResult = products.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .includes(search.toLowerCase());
        const categoryMatch = item.category
          .toLowerCase()
          .includes(search.toLowerCase());
        const colorMatch = item.color
          .toLowerCase()
          .includes(search.toLowerCase());
        const newMatch = item?.result
          ?.toLowerCase()
          .includes(search.toLowerCase());
        return nameMatch || categoryMatch || colorMatch || newMatch;
      });

      setFilteredData(filteredResult);
    }
  };

  return (
    <SearchContext.Provider
      value={{ search, setSearch, filteredData, handleFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
