import { useParams } from "react-router-dom";
import products from "../data/products";
import Slider from "../components/Slider";
import popularCollection1 from "../assets/popular-collection-1.png";
import popularCollection2 from "../assets/popular-collection-2.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoSwiper from "../components/PhotoSwiper";
const DetailedProductPage = () => {
  const { productId } = useParams();
  const images = [
    popularCollection1,
    popularCollection2,
    popularCollection1,
    popularCollection2,
    popularCollection1,
    popularCollection2,
  ];
  return (
    <div>
      {products?.map(
        (prod) =>
          prod.id === productId && (
            <div className="detailed-product-container" key={prod.id}>
              <div className="detailed-slider">
                <PhotoSwiper photos={prod.moreImages} />
              </div>
              <img className="detailed-product-image" src={prod.image} alt="" />
              <div className="detailed-product-details">
                <h1 className="detailed-product-name">{prod.name}</h1>
                <h2 className="d-p-id">{prod.id.slice(-6)}</h2>
                <h2 className="detailed-product-price">{prod.price}</h2>
                <div className="d-p-bookmark">
                  <h2>Add To Favorites</h2>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <h5>Description</h5>
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
