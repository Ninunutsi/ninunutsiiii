import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BurgerStyle } from "./BurgerMenuStyle";
import {
  faHeart,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useBurgerMenu } from "../../contexts/BurgerMenuProvider";
import { Navigation, Parameters } from "../components";
import FilterForm from "../Forms/FilterForm";
import LanguageToggle from "../Buttons/LanguageToggle";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import UserAuthorization from "../UserInformation/UserAuthorization";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const { closeBurgerMenu } = useBurgerMenu();
  const { openAuthorization, isOpen } = useAuthorization();
  const { handleClick } = useScrollToTop("smooth");

  return (
    <BurgerStyle>
      {isOpen && <UserAuthorization style={{ color: "black" }} />}
      <div className="BurgerHeader">
        <div onClick={closeBurgerMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <Parameters>
          <FilterForm nav={"/allProducts"} />
          <div>
            <div className="displayed">
              <LanguageToggle />
            </div>
            <div onClick={closeBurgerMenu}>
              <div onClick={openAuthorization}>
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </div>
            <div onClick={handleClick}>
              <Link onClick={closeBurgerMenu} to="/favorites">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
        </Parameters>
      </div>
      <Navigation className="MainMenu">
        <li onClick={handleClick}>
          <Link onClick={closeBurgerMenu} to={"/woman"}>
            {t("Woman")}
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link onClick={closeBurgerMenu} to={"/kids"}>
            {t("Kids")}
          </Link>
        </li>
      </Navigation>
    </BurgerStyle>
  );
};

export default BurgerMenu;
