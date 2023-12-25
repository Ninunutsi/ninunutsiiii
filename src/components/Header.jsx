import { useEffect, useState } from "react";
import Logo from "../assets/MA.png";
import { Link, useNavigate } from "react-router-dom";
import { HeaderBg, HeaderContent, Navigation, Parameters } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthorization } from "../contexts/AuthorizationContext";
import { useTranslation } from "react-i18next";
import UserAuthorization from "./UserInformation/UserAuthorization";
import useScrollToTop from "../hooks/useScrollToTop";
import LanguageToggle from "./Buttons/LanguageToggle";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import ModalPopup from "./ModalPopup";

const Header = () => {
  const { openAuthorization, isOpen } = useAuthorization();
  const { handleClick } = useScrollToTop("smooth");
  const { setCurrentPage, setSearch } = useProductsContext();
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [click, setCurrentPage]);

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/allProducts");
  };

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
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder={t("Search")}
              // value={search}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
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
          {showModal && <ModalPopup />}
        </Parameters>
      </HeaderContent>
    </HeaderBg>
  );
};

export default Header;
