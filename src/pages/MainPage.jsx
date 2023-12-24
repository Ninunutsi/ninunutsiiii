import { useState } from "react";
import { useTranslation } from "react-i18next";
import promoPhoto from "../assets/promo-photo.png";
import Slider from "../components/Slider";
import Subscription from "../components/Subscription";
import SwiperSlider from "../components/Swiper/SwiperSlider";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import { MainContainer, PopularCollections } from "./AllPages";
import SubmitBtn from "../components/Buttons/SubmitBtn";

const MainPage = () => {
  const { clothes } = useProductsContext();
  const { t } = useTranslation();
  const [promoPhotoLoaded, setPromoPhotoLoaded] = useState(false);

  const handlePromoPhotoLoad = () => {
    setPromoPhotoLoaded(true);
  };

  return (
    <MainContainer className={`main-page ${promoPhotoLoaded ? "loaded" : ""}`}>
      <MainContainer
        className={`main-photo-container ${promoPhotoLoaded ? "loaded" : ""}`}
      >
        <div className="main-content">
          <img
            className="main-page-photo"
            src={promoPhoto}
            alt=""
            onLoad={handlePromoPhotoLoad}
          />
          <div className="mainBtn">
            <SubmitBtn name={t("new")} nav={"newProducts"} />
          </div>
        </div>
        {promoPhotoLoaded && (
          <div>
            <PopularCollections>
              <h3 className="popular-collection-title">{t("Popular")}</h3>
              <div className="popular-collection-gallary">
                <div className="mainBtn">
                  <SubmitBtn name={t("View All")} nav={"allProducts"} />
                </div>
                <Slider images={clothes} imagesPerView={4} />
              </div>
            </PopularCollections>
            <SwiperSlider />
            <Subscription />
          </div>
        )}
      </MainContainer>
    </MainContainer>
  );
};

export default MainPage;
