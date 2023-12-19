import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "ge" ? "en" : "ge";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button style={{width: "26px"}} onClick={toggleLanguage}>
      {i18n.language === "ge" ? "GE" : "EN"}
    </button>
  );
};

export default LanguageToggle;
