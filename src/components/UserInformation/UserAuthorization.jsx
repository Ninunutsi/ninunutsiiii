import React from "react";
import { Authorization, Overlay, UserContent, UserForm } from "./UserInformation";
import Logo from "../../assets/MA.png";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/useToggle";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import UserRegister from "./UserRegister";
import { useTranslation } from "react-i18next";

const UserAuthorization = () => {
  const { t } = useTranslation();
  const { showPassword, togglePassword } = useToggle(false);
  const { closeAuthorization, isRegOpen, openRegister } =
    useAuthorization(false);

  return (
    <UserContent>
      <Authorization>
        {isRegOpen && <UserRegister />}
        <div className="Heading">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
          <div onClick={closeAuthorization} className="closeBtn">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className="buttons">
          <button>
            <img src={Facebook} alt="facebook" />
            {t("Continue with Facebook")}
          </button>
          <button>
            <img src={Google} alt="google" />
            {t("Continue with Google")}
          </button>
        </div>
        <div>
          <h2 className="chooseReg">{t("or")}</h2>
        </div>
        <UserForm>
          <div className="input">
            <label htmlFor="Email">{t("Email address")}</label>
            <input id="Email" type="text" placeholder={t("Email address")} />
          </div>
          <div className="input PasInput">
            <label htmlFor="Password">{t("Password")}</label>
            <input
              id="Password"
              type={showPassword ? "text" : "password"}
              placeholder={t("Password")}
            />
            <FontAwesomeIcon
              id="PasEye"
              icon={showPassword ? faEye : faEyeSlash}
              onClick={togglePassword}
            />
            <Link className="ResPass">{t("Recover Password")}</Link>
          </div>
          <div className="formButtons">
            <button id="LogIn">{t("Log in")}</button>
            <button id="Register" onClick={openRegister}>
              {t("Register")}
            </button>
          </div>
        </UserForm>
      </Authorization>
      <Overlay></Overlay>
    </UserContent>
  );
};

export default UserAuthorization;
