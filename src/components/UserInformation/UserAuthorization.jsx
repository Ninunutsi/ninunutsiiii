import React from "react";
import { Authorization, UserForm } from "./UserInformation";
import Logo from "../../assets/MA.png";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/useToggle";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import UserRegister from "./UserRegister";

const UserAuthorization = () => {
  const { showPassword, togglePassword } = useToggle(false);
  const { closeAuthorization, isRegOpen, openRegister } =
    useAuthorization(false);

  return (
    <Authorization>
      {isRegOpen && <UserRegister />}
      <div className="Heading">
        <Link to={"/"}><img src={Logo} alt="Logo" /></Link>
        <div onClick={closeAuthorization} className="closeBtn">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="buttons">
        <button>
          <img src={Facebook} alt="facebook" />
          Continue with Facebook
        </button>
        <button>
          <img src={Google} alt="google" />
          Continue with Google
        </button>
      </div>
      <div>
        <h2 className="chooseReg">or</h2>
      </div>
      <UserForm>
        <div className="input">
          <label htmlFor="Email">Email address</label>
          <input id="Email" type="text" placeholder="Email address" />
        </div>
        <div className="input PasInput">
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <FontAwesomeIcon
            id="PasEye"
            icon={showPassword ? faEye : faEyeSlash}
            onClick={togglePassword}
          />
          <Link className="ResPass">Recover Password</Link>
        </div>
        <div className="formButtons">
          <button id="LogIn">Log in</button>
          <button id="Register" onClick={openRegister}>Register</button>
        </div>
      </UserForm>
    </Authorization>
  );
};

export default UserAuthorization;
