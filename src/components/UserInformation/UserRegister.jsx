import React from "react";
import { Authorization, UserForm } from "./UserInformation";
import Logo from "../../assets/MA.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsRotate,
  faCheck,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/useToggle";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import { useTranslation } from "react-i18next";
import UserButtonsMobile from "./UserButtonsMobile";
import useRegistration from "../../hooks/useRegistration";
import useRequest from "../../hooks/useRequest";
import { Loading } from "../components";

const UserRegister = ({ onSuccess }) => {
  const { t } = useTranslation();
  const { showPassword: showPassword1, togglePassword: toggle1 } =
    useToggle(false);
  const { showPassword: showPassword2, togglePassword: toggle2 } =
    useToggle(false);
  const { closeRegistration } = useAuthorization();

  const { loading, sentRequest, sendRequest } = useRequest({
    url: "/api/v1/users",
    method: "POST",
    envVariable: "REACT_APP_USERS",
  });

  const {
    EmailRef,
    FNameRef,
    UNameRef,
    PasswordRef,
    CPasswordRef,
    validateInputs,
    handleInput,
  } = useRegistration();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const userRegister = {
      Email: EmailRef.current.value,
      FName: FNameRef.current.value,
      UName: UNameRef.current.value,
      Password: PasswordRef.current.value,
      CPassword: CPasswordRef.current.value,
    };

    const isValid = validateInputs(userRegister);

    if (isValid) {
      sendRequest([{ userRegister }])
        .then(() => {
          onSuccess(userRegister.Email, userRegister.Password);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Authorization>
      <div className="UserHeading">
        <div className="Heading">
          <Link className="HeadingLogo" to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="closeBtn">
            <FontAwesomeIcon onClick={closeRegistration} icon={faArrowLeft} />
          </div>
        </div>
        <UserButtonsMobile goBack={closeRegistration} />
      </div>
      <div className="title">
        <h2>{t("Create Account")}</h2>
      </div>
      <UserForm onSubmit={onFormSubmit}>
        <div className="input">
          <label htmlFor="Email">{t("Email address")}</label>
          <input
            name="Email"
            id="Email"
            type="text"
            placeholder={t("Email address")}
            ref={EmailRef}
            onChange={handleInput}
            autoComplete="email"
          />
        </div>
        <div className="input">
          <label htmlFor="FName">{t("Full name")}</label>
          <input
            name="FName"
            id="FName"
            type="text"
            placeholder={t("Full name")}
            ref={FNameRef}
            onChange={handleInput}
          />
        </div>
        <div className="input">
          <label htmlFor="UName">{t("User name")}</label>
          <input
            name="UName"
            id="UName"
            type="text"
            placeholder={t("User name")}
            ref={UNameRef}
            onChange={handleInput}
          />
        </div>
        <div className="input PasInput marginDel">
          <label htmlFor="Password">{t("Password")}</label>
          <input
            name="Password"
            id="Password"
            type={showPassword1 ? "text" : "password"}
            placeholder={t("Password")}
            ref={PasswordRef}
            onChange={handleInput}
            autoComplete="current-password"
          />
          <FontAwesomeIcon
            id="PasEye1"
            icon={showPassword1 ? faEye : faEyeSlash}
            onClick={toggle1}
          />
        </div>
        <div className="input PasInput">
          <label htmlFor="CPassword">{t("Confirm Password")}</label>
          <input
            name="CPassword"
            id="CPassword"
            type={showPassword2 ? "text" : "password"}
            placeholder={t("Confirm Password")}
            ref={CPasswordRef}
            onChange={handleInput}
          />
          <FontAwesomeIcon
            id="PasEye2"
            icon={showPassword2 ? faEye : faEyeSlash}
            onClick={toggle2}
          />
        </div>
        <div className="formLoadings">
          {loading && (
            <Loading>
              <FontAwesomeIcon icon={faArrowsRotate} />
            </Loading>
          )}
          {sentRequest && (
            <FontAwesomeIcon style={{ color: "green" }} icon={faCheck} />
          )}
        </div>
        <div className="formButtons">
          <button id="Register1">{t("Create Account")}</button>
        </div>
      </UserForm>
    </Authorization>
  );
};

export default UserRegister;
