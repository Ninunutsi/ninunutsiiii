import AboutUs from "../../assets/New.png";
import AboutUs2 from "../../assets/aboutUs2.jpg";
import AboutUs3 from "../../assets/aboutUs3.jpg";
import { useTranslation } from "react-i18next";
import { AboutStyle } from "../AllPages";

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <AboutStyle>
      <h2>{t("About Us")}</h2>
      <div className="aboutContent">
        <h1>{t("mariam’s atelier")}</h1>
        <img src={AboutUs} alt="Logo" />
      </div>
      <div className="aboutContentInfo">
        <h1>{t("title")}</h1>
        <div className="first_paragraph">
          <p>
            {t("lorem1")}
            {t("lorem1")}
          </p>
          <img src={AboutUs2} alt="img" />
        </div>
        <div className="second_paragraph">
          <p>{t("lorem1")}</p>
        </div>
        <div className="third_paragraph">
          <img src={AboutUs3} alt="" />
          <p>
            {t("lorem1")}
            {t("lorem1")}
          </p>
        </div>
      </div>
    </AboutStyle>
  );
};

export default AboutUsPage;
