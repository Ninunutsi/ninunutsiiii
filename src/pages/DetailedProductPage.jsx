import { useParams } from "react-router-dom";
// import products from "../data/products";
import Slider from "../components/Slider";
import popularCollection1 from "../assets/popular-collection-1.png";
import popularCollection2 from "../assets/popular-collection-2.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoSwiper from "../components/PhotoSwiper";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";
const DetailedProductPage = () => {
  const { productId } = useParams()
  const {mainPhoto, currentId, addFav: addtoFav, clothes} = useDetailedPageContext()

  const images = [
    popularCollection1,
    popularCollection2,
    popularCollection1,
    popularCollection2,
    popularCollection1,
    popularCollection2
  ]
  
    return (
    <div>
      {clothes?.map(
        (prod) =>
          prod.id === productId && (
            <div className="detailed-product-container" key={prod.id}>
              <div className="detailed-slider">
                <PhotoSwiper photos={prod.moreImages} id={prod.id}/>
              </div>
              <img className="detailed-product-image" src={(prod.id === currentId && mainPhoto) || prod.image} alt="" />
              <div className="detailed-product-details">
                <h1 className="detailed-product-name">{prod.name}</h1>
                <h2 className="d-p-id">{prod.id.slice(-6)}</h2>
                <h2 className="detailed-product-price">{prod.price}</h2>
                <div className="product-sizes">
                  <h2 className="product-size">S</h2>
                  <h2 className="product-size">M</h2>
                  <h2 className="product-size">L</h2>
                  <h2 className="product-size">XL</h2>
                </div>
                <div onClick={() => addtoFav(prod)} className="d-p-favorite">
                  { }
                  <h2>{prod.isFavorited ?  "Added To Favorites" : "Add To Favorites"}</h2>
                  <FontAwesomeIcon icon={faHeart} style={{color: prod.isFavorited ? 'brown' : 'black'}} />
                </div>
                <h5 className="product-description">Description</h5>
                <h5 className="product-description-text">{prod.description}</h5>
              </div>
            </div>
          )
      )}
      <h3 className="similar-products-title">Similar Products</h3>
      <Slider images={images} />
    </div>
  );
};
export default DetailedProductPage;
