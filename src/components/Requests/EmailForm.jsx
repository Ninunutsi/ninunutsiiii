import {
  ErrorMessage,
  LoadingDiv,
  SubmitButton,
  SubscriptionStyle,
} from "../components";
import { useTranslation } from "react-i18next";
import useEmailForm from "../../hooks/useEmailForm";

const EmailForm = ({ onFormSubmit, loading, sentEmail }) => {
  const { emailRef, isValidEmail, onSubmit } = useEmailForm(onFormSubmit);
  const { t } = useTranslation();

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
        <ErrorMessage style={{ color: "green" }}>{sentEmail}</ErrorMessage>
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
