import { useState } from "react";
import { CRUD_PRODUCTS } from "../../CRUD-API";

const useProductRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (body, custom) => {
    setLoading(true);

    const res = await fetch(url || custom, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CRUD_PRODUCTS}`,
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);

    return data;
  };

  return { loading, sendRequest };
};

export default useProductRequest;
