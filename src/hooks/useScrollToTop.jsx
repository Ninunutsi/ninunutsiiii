import { useCallback, useEffect } from "react";

const useScrollToTop = (mouseBehavior) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: mouseBehavior });
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
