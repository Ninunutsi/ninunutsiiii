import Logo from "../assets/MA.png";
import UserAuthorization from "./UserInformation/UserAuthorization";
import useScrollToTop from "../hooks/useScrollToTop";
import LanguageToggle from "./Buttons/LanguageToggle";
import ModalPopup from "./ModalPopup";
import FilterForm from "./Forms/FilterForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuthorization } from "../contexts/AuthorizationContext";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import { HeaderBg, HeaderContent, Navigation, Parameters } from "./components";

const Header = () => {
  const { t } = useTranslation();
  const { openAuthorization, isOpen } = useAuthorization();
  const { setCurrentPage } = useProductsContext();
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
    <HeaderBg>
      {isOpen && <UserAuthorization />}
      <HeaderContent className="container">
        <div onClick={() => setClick(!click)}>
          <Navigation>
            <li onClick={handleClick}>
              <Link to={"/woman"}>{t("Woman")}</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={"/kids"}>{t("Kids")}</Link>
            </li>
          </Navigation>
        </div>
        <div onClick={handleClick}>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <Parameters>
          <FilterForm nav={"/allProducts"} />
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
          {showModal && <ModalPopup />}
        </Parameters>
      </HeaderContent>
    </HeaderBg>
  );
};
export default Header;
