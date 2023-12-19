import promoPhoto from "../assets/promo-photo.png";
import Slider from "../components/Slider";
import SwiperSlider from "../components/Swiper/SwiperSlider";
import { useDetailedPageContext } from "../contexts/DetailedPageContextProvider";

const MainPage = () => {

  const {clothes} = useDetailedPageContext()

  return (
    <div className="main-page">
      <div className="main-photo-container">
        <img className="main-page-photo" src={promoPhoto} alt="" />
      </div>
      <div className="popular-collection">
        <h3 className="popular-collection-title">on sale/popular picks</h3>
        <div className="popular-collection-gallary">
          <Slider images={clothes} imagesPerView={5}/>
        </div>
      </div>
      <SwiperSlider />
    </div>
  );
};

export default MainPage;
