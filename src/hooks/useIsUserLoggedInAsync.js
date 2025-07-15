import { useEffect, useState } from "react";

export const useIsUserLoggedInAsync = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsUserLoggedIn(true);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(id);
  }, []);

  return { isUserLoggedIn, isLoading };
};
