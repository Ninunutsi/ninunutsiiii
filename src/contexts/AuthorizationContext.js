import React, { createContext, useContext, useState } from "react";

const AuthorizationContext = createContext(null);

export const AuthorizationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegOpen, setRegisterVisible] = useState(false);
  const [isRessOpen, setIsRessOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const openRegister = (e) => {
    e.preventDefault();
    setRegisterVisible(true);
  };

  const closeRegistration = () => {
    setRegisterVisible(false);
  };

  const openAuthorization = () => {
    setIsOpen(true);
  };

  const closeAuthorization = () => {
    setIsOpen(false);
  };

  const openRessetPassword = () => {
    setIsRessOpen(true);
  };

  const closeRessetPassword = () => {
    setIsRessOpen(false);
  };

  const openUserInfo = (e) => {
    e.preventDefault();
    setIsUserOpen(true);
  };

  const closeUserInfo = () => {
    setIsUserOpen(false);
  };

  return (
    <AuthorizationContext.Provider
      value={{
        isOpen,
        openAuthorization,
        closeAuthorization,
        isRegOpen,
        openRegister,
        closeRegistration,
        isRessOpen,
        openRessetPassword,
        closeRessetPassword,
        isUserOpen,
        openUserInfo,
        closeUserInfo,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorization = () => {
  return useContext(AuthorizationContext);
};
