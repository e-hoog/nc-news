import { createContext } from "react";
import useApiRequest from "../components/useApiRequest";

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const { data: topics, isLoading } = useApiRequest(getAllTopics);

  return (
    <TopicsContext.Provider value={{ topics, isLoading }}>
      {children}
    </TopicsContext.Provider>
  );
};
