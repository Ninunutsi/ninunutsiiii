import { useParams } from "react-router-dom"
import products from "../data/products"

const DetailedProductPage = () => {

    const {productId} = useParams()

    return(
        <div>
            {products.map(prod => (
                prod.id === productId &&
                    <div className="detailed-product-container" key={prod.id}>
                        <img src={prod.image} alt=""/>
                        <div className="detailed-product-details">
                            <h1>{prod.name}</h1>
                            <h2>{prod.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DetailedProductPage