import { createContext, useContext, useState, useEffect } from "react";
import products from "../data/products";
import useLocalStorage from "../hooks/useLocalStorage";


const ProductsContext = createContext(null)

const ProductsContextProvider = ({children}) => {

    const [mainPhoto, setMainPhoto] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [clothes, setClothes] = useState(products)
    const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1)
    const [loading, setLoading] = useState(true)
    const [sortByPrice, setSortByPrice] = useState(null)
    const [filterByColor, setFilterByColor] = useState("")


    const addFav = (product) => {
        setClothes((prevState) =>
          prevState.map((cloth) =>
            cloth.id === product.id ? { ...cloth, isFavorited: !cloth.isFavorited } : cloth
          )
        )
      }

      useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 300)
      }, [])

      useEffect(() => {
      setFavorites(clothes.filter(prod => prod.isFavorited))
    },[clothes])


    useEffect(() => {
      if (sortByPrice === 'low-to-high') {
        setClothes(prevState => prevState.sort((a, b) => a.price - b.price))
      } else if (sortByPrice === 'high-to-low') {
        setClothes(prevState => prevState.sort((a, b) => b.price - a.price))
      }
      setCurrentPage(1)
    }, [sortByPrice, setCurrentPage])

    useEffect(() => {
      setClothes(products)
      if(filterByColor.length > 0){
        setClothes(prevState => prevState.filter(product => product.color === filterByColor))
        setCurrentPage(1)
      }
    }, [filterByColor, setCurrentPage])

      const contextValue = {
      mainPhoto,
      setMainPhoto,
      addFav,
      favorites,
      clothes,
      currentPage,
      setCurrentPage,
      loading,
      setSortByPrice,
      setFilterByColor
    }

    return <ProductsContext.Provider value={contextValue}>
        {children}
    </ProductsContext.Provider>
}
    export const useProductsContext = () => {
        const contextValue = useContext(ProductsContext)
        return contextValue
    }

    export default ProductsContextProvider