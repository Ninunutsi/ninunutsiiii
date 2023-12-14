import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "georgian");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "georgian" ? "english" : "georgian"
    );
  };

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      setLanguage("georgian");
    }
  }, [setLanguage]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
