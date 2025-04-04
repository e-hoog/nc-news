import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";
import useApiRequest from "./useApiRequest";
import { getAllArticles } from "../utils/api";
import { CircularProgress } from "@mui/material";
import Pagination from "./Pagination";

function ArticleList({ sort_by, perPage, topic }) {
  const [page, setPage] = useState(1);
  const apiParams = useMemo(() => {
    return { sort_by, topic };
  }, [topic]);
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
          if (
            index + 1 <= perPage * page &&
            index + 1 >= perPage * page - (perPage - 1)
          ) {
            return <ArticleCard key={article.article_id} article={article} />;
          }
        })
      )}
      {perPage > 3 && !isLoading ? (
        <Pagination
          items={articles.length}
          perPage={perPage}
          page={page}
          setPage={setPage}
        ></Pagination>
      ) : null}
    </section>
  );
}

export default ArticleList;
