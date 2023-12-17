import { useCallback, useEffect } from "react";

const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const handleClick = (event) => {
    event.preventDefault();
    scrollToTop();
  };

  return { handleClick };
};

export default useScrollToTop;
