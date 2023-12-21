import { useState } from "react";
import { useTranslation } from "react-i18next";
import promoPhoto from "../assets/promo-photo.png";
import Slider from "../components/Slider";
import Subscription from "../components/Subscription";
import SwiperSlider from "../components/Swiper/SwiperSlider";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";

const MainPage = () => {
  const { clothes } = useDetailedPageContext();
  const { t } = useTranslation();
  const [promoPhotoLoaded, setPromoPhotoLoaded] = useState(false);

  const handlePromoPhotoLoad = () => {
    setPromoPhotoLoaded(true);
  };

  return (
    <div className={`main-page ${promoPhotoLoaded ? "loaded" : ""}`}>
      <div className={`main-photo-container ${promoPhotoLoaded ? "loaded" : ""}`}>
        <img
          className="main-page-photo"
          src={promoPhoto}
          alt=""
          onLoad={handlePromoPhotoLoad}
        />
        {promoPhotoLoaded && (
          <>
            <div className="popular-collection">
              <h3 className="popular-collection-title">
                {t("on sale/popular picks")}
              </h3>
              <div className="popular-collection-gallary">
                <Slider images={clothes} imagesPerView={4} />
              </div>
            </div>
            <SwiperSlider />
            <Subscription />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
