import { useEffect, useState } from "react";

const useApiRequest = (apiFunc, ...args) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    apiFunc(...args)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...args]);
  return { data, isLoading, error };
};

export default useApiRequest;
