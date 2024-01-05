import { useState } from "react";
import { CRUD_USERS_EMAIL } from "../CRUD-API";

const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const sendRequest = async (body, custom) => {
    setLoading(true);

    const res = await fetch(url || custom, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CRUD_USERS_EMAIL}`,
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);
    setSentEmail(true);

    setTimeout(() => {
      setSentEmail(false);
    }, 1000);
    return data;
  };

  return { loading, sentEmail, sendRequest };
};

export default useRequest;
