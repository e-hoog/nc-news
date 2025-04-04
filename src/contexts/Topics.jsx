import { createContext } from "react";
import useApiRequest from "../components/useApiRequest";
import { getAllTopics } from "../utils/api";

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const { data: topics, isTopicsLoading } = useApiRequest(getAllTopics);

  return (
    <TopicsContext.Provider value={{ topics, isTopicsLoading }}>
      {children}
    </TopicsContext.Provider>
  );
};
