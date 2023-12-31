import useRequest from "../hooks/useRequest";
import EmailForm from "./Requests/EmailForm";
import { Loading } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faCheck } from "@fortawesome/free-solid-svg-icons";

const Subscription = () => {
  const { loading, sentEmail, sendRequest } = useRequest({
    url: "/api/v1/users",
    method: "POST",
  });

  const onSubmit = (email) => {
    sendRequest([{ email }]).catch((err) => console.log(err));
  };

  const loadingProces = (
    <Loading>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </Loading>
  );

  const emailSent = <FontAwesomeIcon icon={faCheck} />;

  if (loading) return <EmailForm loading={loadingProces} />;
  if (sentEmail) return <EmailForm isFormSubmitted={sentEmail} sentEmail={emailSent} />;

  return (
    <div>
      <EmailForm isFormSubmitted={sentEmail} onFormSubmit={onSubmit} />
    </div>
  );
};

export default Subscription;
