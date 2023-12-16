import React from "react";
import { Authorization, UserForm } from "./UserInformation";
import Logo from "../../assets/MA.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/useToggle";
import { useAuthorization } from "../../contexts/AuthorizationContext";

const UserRegister = () => {
  const { showPassword: showPassword1, togglePassword: toggle1 } = useToggle(false);
  const { showPassword: showPassword2, togglePassword: toggle2 } = useToggle(false);
  const { closeRegistration } = useAuthorization();

  return (
    <Authorization>
      <div className="Heading">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="closeBtn">
          <FontAwesomeIcon onClick={closeRegistration} icon={faXmark} />
        </div>
      </div>
      <div className="title">
        <h2>Create Account</h2>
      </div>
      <UserForm>
        <div className="input">
          <label htmlFor="Email">Email address</label>
          <input id="Email" type="text" placeholder="Email address" />
        </div>
        <div className="input">
          <label htmlFor="fName">First name</label>
          <input id="fName" type="text" placeholder="First name" />
        </div>
        <div className="input">
          <label htmlFor="lName">Last name</label>
          <input id="lName" type="text" placeholder="Last name" />
        </div>
        <div className="input PasInput marginDel">
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            type={showPassword1 ? "text" : "password"}
            placeholder="Password"
          />
          <FontAwesomeIcon
            id="PasEye"
            icon={showPassword1 ? faEye : faEyeSlash}
            onClick={toggle1}
          />
        </div>
        <div className="input PasInput">
          <label htmlFor="cPassword">Confirm Password</label>
          <input
            id="cPassword"
            type={showPassword2 ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <FontAwesomeIcon
            id="PasEye"
            icon={showPassword2 ? faEye : faEyeSlash}
            onClick={toggle2}
          />
        </div>
        <div className="formButtons">
          <button id="Register">Create Account</button>
        </div>
      </UserForm>
    </Authorization>
  );
};

export default UserRegister;
