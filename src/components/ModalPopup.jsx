import { useTranslation } from "react-i18next";
import useRequest from "../hooks/useRequest";
import { Loading } from "./components";
import ModalForm from "./Requests/ModalForm";

const ModalPopup = () => {
  const { t } = useTranslation();
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

  const emailSent = <p>{t("Thank you for Subscription")}</p>;

  if (loading) return <ModalForm loading={loadingProces} />;
  if (sentEmail) return <ModalForm sentEmail={emailSent} />;

  return (
    <div>
      <ModalForm onFormSubmit={onSubmit} />
    </div>
  );
};

export default ModalPopup;
