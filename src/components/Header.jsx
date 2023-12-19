import React from "react";
import Logo from "../assets/MA.png";
import { Link } from "react-router-dom";
import { HeaderBg, HeaderContent, Navigation, Parameters } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleUser, faHeart, } from "@fortawesome/free-solid-svg-icons";
import { useAuthorization } from "../contexts/AuthorizationContext";
import { useTranslation } from "react-i18next";
import UserAuthorization from "./UserInformation/UserAuthorization";
import useScrollToTop from "../hooks/useScrollToTop";
import LanguageToggle from "./Buttons/LanguageToggle";

const Header = () => {
  const { openAuthorization, isOpen } = useAuthorization();
  const { handleClick } = useScrollToTop("smooth");
  const { t } = useTranslation();

  return (
    <HeaderBg>
      {isOpen && <UserAuthorization />}
      <HeaderContent className="container">
        <div>
          <Navigation>
            <li onClick={handleClick}>
              <Link to={"/woman"}>{t("Woman")}</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={"/kids"}>{t("Kids")}</Link>
            </li>
          </Navigation>
        </div>
        <div onClick={handleClick}> <Link to={"/"}><img src={Logo} alt="Logo" /></Link></div>
        <Parameters>
          <form>
            <input
              type="search"
              placeholder={t("Search")}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
          <div>
            <div>
              <LanguageToggle />
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
