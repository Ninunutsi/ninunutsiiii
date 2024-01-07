import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/MA.png";
import { Authorization, Overlay, UserContent } from "./UserInformation";
import UserButtonsMobile from "./UserButtonsMobile";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import { useTranslation } from "react-i18next";
import {
  faCommentDots,
  faHeart,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserLoggedIn = (props) => {
  const { t } = useTranslation();
  const {
    closeAuthorization,
    closeRegistration,
    closeRessetPassword,
    closeUserInfo,
  } = useAuthorization();

  const handleOverlayClick = () => {
    closeAuthorization();
    closeRegistration();
    closeRessetPassword();
    closeUserInfo();
  };

  return (
    <div>
      <UserContent>
        <Authorization>
          <div className="UserHeading">
            <div className="Heading">
              <Link className="HeadingLogo" to={"/"}>
                <img src={Logo} alt="Logo" />
              </Link>
              <div onClick={handleOverlayClick} className="closeBtn">
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <UserButtonsMobile />
          </div>
          <div className="userInfo">
            <h2>
              {t("Hello")}: ლექსო25{props.name}
            </h2>
            <h3>ggg@gmail.com{props.email}</h3>
            <Link onClick={handleOverlayClick} to={"/favorites"}>
              <FontAwesomeIcon style={{ color: "#FF0000" }} icon={faHeart} />
              {t("liked Products")}
            </Link>
            <Link>
              <FontAwesomeIcon className="BurgerIcon" icon={faUserCircle} />
              {t("My Information")}
            </Link>
            <Link onClick={handleOverlayClick} to={"/contact"}>
              <FontAwesomeIcon className="BurgerIcon" icon={faCommentDots} />
              {t("Contact Information")}
            </Link>
          </div>
        </Authorization>
        <Overlay onClick={handleOverlayClick}></Overlay>
      </UserContent>
    </div>
  );
};

export default UserLoggedIn;
