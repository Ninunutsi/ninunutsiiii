import { Link } from "react-router-dom"
import ProductList from "../components/Pagination"
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider"

const FavoritesPage = () => {
const {favorites} = useDetailedPageContext()

    return(
        <div className="favorites-page">
            {favorites.length > 0 ? 
            <ProductList
                products={favorites}
                productsPerPage={8}
            /> :
            <div className="favorites-no-products">
                <h2 className="favorites-text">
                You have not added products yet 
                </h2>
                <Link className="favorites-back-button" to="/">Back to Products</Link>
            </div>
        
        }
        </div>
    )
}

export default FavoritesPage