import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoSwiper from "../components/PhotoSwiper";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";
import { useTranslation } from "react-i18next";
import { DetailedProducts, SimilarProductTitle } from "./AllPages";

const DetailedProductPage = () => {
  const { productId } = useParams();
  const { mainPhoto, addFav: addtoFav, clothes } = useDetailedPageContext();
  const { t } = useTranslation();
  const imagesForSlider = clothes.filter((product) => product.id !== productId);

  return (
    <div>
      {clothes?.map(
        (prod) =>
          prod.id === productId && (
            <DetailedProducts key={prod.id}>
              <div className="detailed-slider">
                <PhotoSwiper photos={prod.moreImages} id={prod.id} />
              </div>
              <img
                className="detailed-product-image"
                src={mainPhoto || prod.image}
                alt=""
              />
              <div className="detailed-product-details">
                <h1 className="detailed-product-name">{prod.name}</h1>
                <h2 className="d-p-id">{prod.id.slice(-6)}</h2>
                <h2 className="detailed-product-price">{prod.price}</h2>
                {/* <div className="product-sizes">
                  <h2 className="product-size">S</h2>
                  <h2 className="product-size">M</h2>
                  <h2 className="product-size">L</h2>
                  <h2 className="product-size">XL</h2>
                </div> */}
                <div onClick={() => addtoFav(prod)} className="d-p-favorite">
                  {}
                  <h2>
                    {prod.isFavorited
                      ? ` ${t("Added To Favorites")} `
                      : ` ${t("Add To Favorites")} `}
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: prod.isFavorited ? "brown" : "black" }}
                  />
                </div>
                <h5 className="product-description">{t("Description")}</h5>
                <h5 className="product-description-text">{prod.description}</h5>
              </div>
            </DetailedProducts>
          )
      )}
      <SimilarProductTitle>{t("Similar Products")}</SimilarProductTitle>
      <Slider images={imagesForSlider} imagesPerView={4} />
    </div>
  );
};
export default DetailedProductPage;
