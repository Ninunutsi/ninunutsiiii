import React, { createContext, useContext, useState } from "react";

const AuthorizationContext = createContext(null);

export const AuthorizationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegOpen, setRegisterVisible] = useState(false);

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

  return (
    <AuthorizationContext.Provider
      value={{
        isOpen,
        openAuthorization,
        closeAuthorization,
        isRegOpen,
        openRegister,
        closeRegistration,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorization = () => {
  return useContext(AuthorizationContext);
};
