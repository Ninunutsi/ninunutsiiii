import { useRef, useState } from "react";
import { ErrorMessage, LoadingDiv, SubmitButton, SubscriptionStyle} from "../components";

const EmailForm = ({ onFormSubmit, loading, sentEmail }) => {
  const emailRef = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);

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
        <h1>Subscribe to our newsletter</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="subscription">
            subscribe to receive our latest news
          </label>
          <input
            style={{
              border: isValidEmail ? "1px solid black" : "1px solid red",
            }}
            id="subscription"
            type="text"
            placeholder="enter E-mail"
            ref={emailRef}
          />
          <ErrorMessage style={{color: "green"}}>{sentEmail}</ErrorMessage>
          {!isValidEmail && (
            <ErrorMessage className="error-message">
              Please enter a valid email address
            </ErrorMessage>
          )}
          <SubmitButton>Submit</SubmitButton>
        </form>
    </SubscriptionStyle>
  );
};

export default EmailForm;
