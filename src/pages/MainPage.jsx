import promoPhoto from "../assets/promo-photo.png";
import popularCollection1 from "../assets/popular-collection-1.png";
import popularCollection2 from "../assets/popular-collection-2.png";
import Capstone from "../assets/Capstone.png";
import Slider from "../components/Slider";

const MainPage = () => {
  const images = [
    popularCollection1,
    popularCollection2,
    popularCollection1,
    popularCollection2,
    popularCollection1,
    popularCollection2,
  ];
  return (
    <div className="main-page">
      <div className="main-photo-container">
        <img className="main-page-photo" src={promoPhoto} alt="" />
        <img className="logo" src={Capstone} alt="" />
      </div>
      <div className="popular-collection">
        <h3 className="popular-collection-title">on sale/popular picks</h3>
        <div className="popular-collection-gallary">
          <Slider images={images} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
