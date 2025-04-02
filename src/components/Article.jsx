import { useParams, useSearchParams } from "react-router-dom";
import { getArticleById } from "./utils/api";
import useApiRequest from "./useApiRequest";
import { CircularProgress } from "@mui/material";

function Article() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { article_id } = useParams();
  const {
    data: article,
    isLoading,
    err,
  } = useApiRequest(getArticleById, article_id);
  const formattedCreatedAt = new Date().toLocaleString("gb");
  return (
    <section className="default-page">
      <section className="article-box-container">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <p>
              {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
            </p>
            <h1>{article.title}</h1>
            <p title={formattedCreatedAt}>{article.created_at.slice(0, 10)}</p>
            <p>{article.author}</p>
            <p>{article.body}</p>
            <div className="article-image-container">
              <img
                className="article-box-image"
                src={article.article_img_url}
              ></img>
            </div>
          </>
        )}
      </section>
    </section>
  );
}

export default Article;
