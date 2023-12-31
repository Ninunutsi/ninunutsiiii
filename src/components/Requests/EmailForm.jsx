import {
  ErrorMessage,
  LoadingDiv,
  SubmitButton,
  SubscriptionStyle,
} from "../components";
import { useTranslation } from "react-i18next";
import useEmailForm from "../../hooks/useEmailForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const EmailForm = ({ onFormSubmit, loading, sentEmail }) => {
  const { emailRef, inputStyle, isValidEmail, handleInputChange, onSubmit } =
    useEmailForm(onFormSubmit);
  const { t } = useTranslation();

  return (
    <SubscriptionStyle>
      <h1>{t("Subscribe to our newsletter")}</h1>
      <form className="EmailForms" onSubmit={onSubmit}>
        <label htmlFor="subscription">
          {t("subscribe to receive our latest news")}
        </label>
        <LoadingDiv>{loading}</LoadingDiv>
        <input
          style={inputStyle}
          id="subscription"
          type="text"
          placeholder={t("enter E-mail")}
          ref={emailRef}
          onChange={handleInputChange}
        />
        <ErrorMessage style={{ color: "#14AE5C" }}>{sentEmail}</ErrorMessage>
        {!isValidEmail && (
          <ErrorMessage className="error-message">
            <FontAwesomeIcon style={{ color: "#d80000" }} icon={faXmark} />
          </ErrorMessage>
        )}
        <SubmitButton>{t("Submit")}</SubmitButton>
      </form>
    </SubscriptionStyle>
  );
};

export default EmailForm;
