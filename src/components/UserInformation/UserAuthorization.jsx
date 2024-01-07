import React, { useState } from "react";
import {
  Authorization,
  Overlay,
  UserContent,
  UserForm,
} from "./UserInformation";
import Logo from "../../assets/MA.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/useToggle";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import UserRegister from "./UserRegister";
import { useTranslation } from "react-i18next";
import UserButtonsMobile from "./UserButtonsMobile";
import UserRessetPassword from "./UserRessetPassword";
import UserLoggedIn from "./UserLoggedIn";

const UserAuthorization = () => {
  const { t } = useTranslation();
  const { showPassword, togglePassword } = useToggle(false);
  const {
    closeRegistration,
    closeAuthorization,
    isRegOpen,
    openRegister,
    isRessOpen,
    openRessetPassword,
    closeRessetPassword,
    isUserOpen,
    openUserInfo,
    closeUserInfo,
  } = useAuthorization(false);

  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const RegisterOnSuccess = (email, password) => {
    setAuthEmail(email);
    setAuthPassword(password);
  };

  const handleOverlayClick = () => {
    closeAuthorization();
    closeRegistration();
    closeRessetPassword();
    closeUserInfo();
  };

  return (
    <UserContent>
      <Authorization>
        {isRegOpen && <UserRegister onSuccess={RegisterOnSuccess} />}
        {isRessOpen && <UserRessetPassword onSuccess={RegisterOnSuccess} />}
        {isUserOpen && <UserLoggedIn />}
        <div className="UserHeading">
          <div className="Heading">
            <Link className="HeadingLogo" to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
            <div onClick={closeAuthorization} className="closeBtn">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <UserButtonsMobile />
        </div>
        <div>
          <h2 className="AuthoText">{t("Authorization")}</h2>
        </div>
        <UserForm>
          <div className="input">
            <label htmlFor="Email1">{t("Email address")}</label>
            <input
              name="Email1"
              id="Email1"
              type="text"
              placeholder={t("Email address")}
              value={authEmail}
              onChange={(e) => setAuthEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="input PasInput">
            <label htmlFor="Password1">{t("Password")}</label>
            <input
              name="password1"
              id="Password1"
              type={showPassword ? "text" : "password"}
              placeholder={t("Password")}
              value={authPassword}
              onChange={(e) => setAuthPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FontAwesomeIcon
              id="PasEye"
              icon={showPassword ? faEye : faEyeSlash}
              onClick={togglePassword}
            />
            <div onClick={openRessetPassword} className="ResPass">
              <Link onClick={openRessetPassword}>{t("Recover Password")}</Link>
            </div>
          </div>
          <div className="formButtons">
            <button id="LogIn" onClick={openUserInfo}>
              {t("Log in")}
            </button>
            <button id="Register" onClick={openRegister}>
              {t("Register")}
            </button>
          </div>
        </UserForm>
      </Authorization>
      <Overlay onClick={handleOverlayClick}></Overlay>
    </UserContent>
  );
};

export default UserAuthorization;
