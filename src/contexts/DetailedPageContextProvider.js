import { createContext, useContext, useState, useEffect } from "react";
import products from "../data/products";
import useLocalStorage from "../hooks/useLocalStorage";


const DetailedPageContext = createContext(null)

const DetailedPageContextProvider = ({children}) => {

    const [mainPhoto, setMainPhoto] = useState(null)
    const [currentId, setCurrentId] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [clothes, setClothes] = useState(products)
    const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1)

    const addFav = (product) => {
        setClothes((prevState) =>
          prevState.map((cloth) =>
            cloth.id === product.id ? { ...cloth, isFavorited: !cloth.isFavorited } : cloth
          )
        )
      }

      useEffect(() => {
      setFavorites(clothes.filter(prod => prod.isFavorited))
    },[clothes])

        const contextValue = {
        mainPhoto,
        setMainPhoto,
        currentId,
        setCurrentId,
        addFav,
        favorites,
        clothes,
        currentPage,
        setCurrentPage
      }

    return <DetailedPageContext.Provider value={contextValue}>
        {children}
    </DetailedPageContext.Provider>
}
    export const useDetailedPageContext = () => {
        const contextValue = useContext(DetailedPageContext)
        return contextValue
    }

    export default DetailedPageContextProvider