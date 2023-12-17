import { createContext, useContext, useState } from "react";


const DetailedPageContext = createContext(null)

const DetailedPageContextProvider = ({children}) => {

    const [mainPhoto, setMainPhoto] = useState(null)
    const [currentId, setCurrentId] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [isFavorited, setIsfavorited] = useState(false)

    const addFav = (product) => {
        setIsfavorited(prevState => !prevState)
        isFavorited ?
        setFavorites(prevState => [product, ...prevState]) :
        setFavorites(prevState => prevState.map((prod, index) => 
            prod === product && prevState.splice(index)
            ))
    }

    const contextValue = {
        mainPhoto,
        setMainPhoto,
        currentId,
        setCurrentId,
        isFavorited,
        addFav
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