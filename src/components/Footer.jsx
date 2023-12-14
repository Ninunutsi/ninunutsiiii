import { useLanguage } from "../contexts/LanguageContext";
import { FooterDiv } from "./components";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <FooterDiv>
      {language === "georgian" ? "ფუთერი" : "This is Footer"}
    </FooterDiv>
  );
};

export default Footer;
