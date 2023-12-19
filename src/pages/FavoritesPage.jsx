import ProductList from "../components/Pagination"
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider"

const FavoritesPage = () => {
const {favorites} = useDetailedPageContext()

    return(
        <ProductList
            products={favorites}
            productsPerPage={8}
            category="favoriteProducts"
        />
    )
}

export default FavoritesPage