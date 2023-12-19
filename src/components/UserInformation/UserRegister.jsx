import React from "react";
import { Authorization, UserForm } from "./UserInformation";
import Logo from "../../assets/MA.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/useToggle";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import { useTranslation } from "react-i18next";

const UserRegister = () => {
  const { t } = useTranslation();
  const { showPassword: showPassword1, togglePassword: toggle1 } = useToggle(false);
  const { showPassword: showPassword2, togglePassword: toggle2 } = useToggle(false);
  const { closeRegistration } = useAuthorization();

  return (
    <Authorization>
      <div className="Heading">
        <Link to={"/"}><img src={Logo} alt="Logo" /></Link>
        <div className="closeBtn">
          <FontAwesomeIcon onClick={closeRegistration} icon={faArrowLeft} />
        </div>
      </div>
      <div className="title">
        <h2>{t("Create Account")}</h2>
      </div>
      <UserForm>
        <div className="input">
          <label htmlFor="Email">{t("Email address")}</label>
          <input id="Email" type="text" placeholder={t("Email address")} />
        </div>
        <div className="input">
          <label htmlFor="fName">{t("First name")}</label>
          <input id="fName" type="text" placeholder={t("First name")} />
        </div>
        <div className="input">
          <label htmlFor="lName">{t("Last name")}</label>
          <input id="lName" type="text" placeholder={t("Last name")} />
        </div>
        <div className="input PasInput marginDel">
          <label htmlFor="Password">{t("Password")}</label>
          <input
            id="Password"
            type={showPassword1 ? "text" : "password"}
            placeholder={t("Password")}
          />
          <FontAwesomeIcon
            id="PasEye"
            icon={showPassword1 ? faEye : faEyeSlash}
            onClick={toggle1}
          />
        </div>
        <div className="input PasInput">
          <label htmlFor="cPassword">{t("Confirm Password")}</label>
          <input
            id="cPassword"
            type={showPassword2 ? "text" : "password"}
            placeholder={t("Confirm Password")}
          />
          <FontAwesomeIcon
            id="PasEye"
            icon={showPassword2 ? faEye : faEyeSlash}
            onClick={toggle2}
          />
        </div>
        <div className="formButtons">
          <button id="Register">{t("Create Account")}</button>
        </div>
      </UserForm>
    </Authorization>
  );
};

export default UserRegister;
