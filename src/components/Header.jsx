import Logo from "../assets/MA.png";
import MediaLogo from "../assets/Footerlogo.png";
import UserAuthorization from "./UserInformation/UserAuthorization";
import useScrollToTop from "../hooks/useScrollToTop";
import LanguageToggle from "./Buttons/LanguageToggle";
import ModalPopup from "./ModalPopup";
import FilterForm from "./Forms/FilterForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthorization } from "../contexts/AuthorizationContext";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import { HeaderBg, HeaderContent, Navigation, Parameters } from "./components";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useBurgerMenu } from "../contexts/BurgerMenuProvider";

const Header = () => {
  const { t } = useTranslation();
  const { openAuthorization, isOpen } = useAuthorization();
  const { setCurrentPage } = useProductsContext();
  const { isBurgerMenuOpen, openBurgerMenu } = useBurgerMenu();
  const { handleClick } = useScrollToTop("smooth");
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [click, setCurrentPage]);

  return (
    <HeaderBg id="MainHeader">
      {isOpen && <UserAuthorization />}
      {isBurgerMenuOpen && <BurgerMenu />}
      <HeaderContent className="container">
        <div onClick={() => setClick(!click)}>
          <Navigation className="BurgerMenu">
            <FontAwesomeIcon onClick={openBurgerMenu} icon={faBars} />
          </Navigation>
          <Navigation className="MainMenu">
            <li onClick={handleClick}>
              <Link to={"/woman"}>{t("Woman")}</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={"/kids"}>{t("Kids")}</Link>
            </li>
          </Navigation>
        </div>
        <div className="logoDiv" onClick={handleClick}>
          <Link to="/">
            <img className="MediaLogo" src={MediaLogo} alt="Logo" />
          </Link>
          <Link to="/">
            <img className="Logo" src={Logo} alt="Logo" />
          </Link>
        </div>
        <Parameters>
          <FilterForm nav={"/allProducts"} />
          <div>
            <div className="displayed">
              <LanguageToggle />
            </div>
            <div>
              <div onClick={openAuthorization}>
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </div>
            <div onClick={handleClick}>
              <Link to="/favorites">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
          {showModal && <ModalPopup />}
        </Parameters>
      </HeaderContent>
    </HeaderBg>
  );
};
export default Header;
