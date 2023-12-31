import { useRef, useState } from "react";

const useEmailForm = (onFormSubmit) => {
  const emailRef = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email)) {
      onFormSubmit(email);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    setIsFormSubmitted(true);
  };

  const handleInputChange = () => {
    const email = emailRef.current.value;
    setIsInputEmpty(email.trim() === "");

    if (!isInputEmpty) {
      setIsValidEmail(true);
    }

    setIsFormSubmitted(false);
  };

  const inputStyle = {
    border: isInputEmpty
      ? "1px solid black"
      : isValidEmail
      ? "1px solid black"
      : "1px solid #D80000",

    color: isValidEmail ? "black" : "#D80000",
  };

  return {
    emailRef,
    isValidEmail,
    onSubmit,
    isInputEmpty,
    handleInputChange,
    isFormSubmitted,
    inputStyle,
  };
};

export default useEmailForm;
