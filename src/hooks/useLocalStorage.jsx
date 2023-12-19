import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? fallback
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // console.log(localStorage);
  return [value, setValue];
};

export default useLocalStorage;
