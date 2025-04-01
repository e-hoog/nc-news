import { useMemo } from "react";
import ArticleCard from "./ArticleCard";
import useApiRequest from "./useApiRequest";
import { getAllArticles } from "./utils/api";
import { CircularProgress } from "@mui/material";

function ArticleList({ sort_by }) {
  const apiParams = useMemo(() => {
    return { sort_by };
  }, []);
  const {
    data: articles,
    isLoading,
    err,
  } = useApiRequest(getAllArticles, apiParams);
  return (
    <section>
      {isLoading ? (
        <CircularProgress />
      ) : (
        articles.map((article, index) => {
          if (index < 3) {
            return <ArticleCard key={article.article_id} article={article} />;
          }
        })
      )}
    </section>
  );
}

export default ArticleList;
