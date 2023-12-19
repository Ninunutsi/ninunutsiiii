import React from "react";
import Logo from "../assets/MA.png";
import { Link } from "react-router-dom";
import { HeaderBg, HeaderContent, Navigation, Parameters } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleUser, faHeart, } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuthorization } from "../contexts/AuthorizationContext";
import UserAuthorization from "./UserInformation/UserAuthorization";
import useScrollToTop from "../hooks/useScrollToTop";

const Header = () => {
  const { toggleLanguage, language } = useLanguage();
  const { openAuthorization, isOpen } = useAuthorization();
  const { handleClick } = useScrollToTop("smooth");

  return (
    <HeaderBg>
      {isOpen && <UserAuthorization />}
      <HeaderContent className="container">
        <div>
          <Navigation>
            <li onClick={handleClick}>
              <Link to={"/woman"}>
                {language === "georgian" ? "ქალი" : "Woman"}
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to={"/kids"}>
                {language === "georgian" ? "ბავშვი" : "Kids"}
              </Link>
            </li>
          </Navigation>
        </div>
        <div onClick={handleClick}><Link to={"/"}><img src={Logo} alt="Logo" /></Link></div>
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
              <div onClick={openAuthorization}>
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
            </div>
            <div onClick={handleClick}>
              <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
        </Parameters>
      </HeaderContent>
    </HeaderBg>
  );
};

export default Header;
