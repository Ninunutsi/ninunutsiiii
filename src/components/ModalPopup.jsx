import useRequest from "../hooks/useRequest";
import ModalForm from "./Requests/ModalForm";
import { useState } from "react";
import { Loading } from "./components";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faCheck } from "@fortawesome/free-solid-svg-icons";

const ModalPopup = () => {
  const { t } = useTranslation();
  const [isSubmited, setIsSubmited] = useState(false);

  const { loading, sentEmail, sendRequest } = useRequest({
    url: "/api/v1/users",
    method: "POST",
  });

  const onSubmit = (email) => {
    sendRequest([{ email }]).catch((err) => console.log(err));
    setIsSubmited(true);
  };

  const loadingProces = (
    <Loading>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </Loading>
  );

  const emailSent = <FontAwesomeIcon icon={faCheck} />;

  if (loading) return <ModalForm loading={loadingProces} />;
  if (sentEmail) return <ModalForm sentEmail={emailSent} />;

  return (
    !isSubmited && (
      <div>
        <ModalForm onFormSubmit={onSubmit} />
      </div>
    )
  );
};

export default ModalPopup;
