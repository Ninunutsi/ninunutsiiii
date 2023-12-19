import { useRef, useState } from "react";
import { ErrorMessage, LoadingDiv, SubmitButton, SubscriptionStyle} from "../components";
import { useTranslation } from "react-i18next";

const EmailForm = ({ onFormSubmit, loading, sentEmail }) => {
  const emailRef = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { t } = useTranslation()

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
  };

  return (
    <SubscriptionStyle>
      <LoadingDiv>{loading}</LoadingDiv>
        <h1>{t("Subscribe to our newsletter")}</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="subscription">
            {t("subscribe to receive our latest news")}
          </label>
          <input
            style={{
              border: isValidEmail ? "1px solid black" : "1px solid red",
            }}
            id="subscription"
            type="text"
            placeholder={t("enter E-mail")}
            ref={emailRef}
          />
          <ErrorMessage style={{color: "green"}}>{sentEmail}</ErrorMessage>
          {!isValidEmail && (
            <ErrorMessage className="error-message">
              {t("Please enter a valid email address")}
            </ErrorMessage>
          )}
          <SubmitButton>{t("Submit")}</SubmitButton>
        </form>
    </SubscriptionStyle>
  );
};

export default EmailForm;
