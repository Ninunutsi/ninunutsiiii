import useRequest from "../hooks/useRequest";
import EmailForm from "./Requests/EmailForm";
import { Loading } from "./components";

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
      <div></div>
      <div></div>
      <div></div>
    </Loading>
  );

  const emailSent = <p>Thank you for Subscription</p>;

  if (loading) return <EmailForm loading={loadingProces} />;
  if (sentEmail) return <EmailForm sentEmail={emailSent} />;

  return (
    <div>
      <EmailForm onFormSubmit={onSubmit} />
    </div>
  );
};

export default Subscription;