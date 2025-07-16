import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        const dataResponse = await response.json();
        if (response.ok) {
          setData(dataResponse);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { data, isLoading };
};
