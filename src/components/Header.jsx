import React from "react";
import { Link } from "react-router-dom";
import { HeaderBg, HeaderContent, Navigation, Parameters } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <HeaderBg>
      <HeaderContent className="container">
        <nav>
          <Navigation>
            <li>
              <Link to={"/"}>
                {language === "georgian" ? "მთავარი" : "Main"}
              </Link>
            </li>
            <li>
              <Link to={"/woman"}>
                {language === "georgian" ? "ქალი" : "Woman"}
              </Link>
            </li>
            <li>
              <Link to={"/child"}>
                {language === "georgian" ? "ბავშვი" : "Kids"}
              </Link>
            </li>
          </Navigation>
        </nav>
        <Parameters>
          <form>
            <input
              type="search"
              placeholder={language === "georgian" ? "ძებნა" : "Search"}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
          <div>
            <div>
              <button onClick={toggleLanguage}>
                {language === "georgian" ? "EN" : "GE"}
              </button>
            </div>
            <div>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </Parameters>
      </HeaderContent>
    </HeaderBg>
  );
};

export default Header;
