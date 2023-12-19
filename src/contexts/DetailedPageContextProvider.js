import { createContext, useContext, useState } from "react";
import products from "../data/products";


const DetailedPageContext = createContext(null)

const DetailedPageContextProvider = ({children}) => {

    const [mainPhoto, setMainPhoto] = useState(null)
    const [currentId, setCurrentId] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [clothes, setClothes] = useState(products)

    const addFav = (product) => {
        setClothes((prevState) =>
          prevState.map((cloth) =>
            cloth.id === product.id ? { ...cloth, isFavorited: !cloth.isFavorited } : cloth
          )
        )
        setFavorites(clothes.filter(prod => prod.isFavorited))
      }

        const contextValue = {
        mainPhoto,
        setMainPhoto,
        currentId,
        setCurrentId,
        addFav,
        favorites,
        clothes
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