import { useParams, useSearchParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "./utils/api";
import useApiRequest from "./useApiRequest";
import { Alert, ButtonGroup, CircularProgress, Divider } from "@mui/material";
import CommentCard from "./CommentCard";
import Votes from "./Votes";
import { useState } from "react";

function Article() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { article_id } = useParams();
  const {
    data: article,
    isLoading: isArticleLoading,
    err: articleErr,
  } = useApiRequest(getArticleById, article_id);
  const {
    data: comments,
    isLoading: isCommentsLoading,
    err: commentsErr,
  } = useApiRequest(getCommentsByArticleId, article_id);
  const [voteError, setVoteError] = useState(null);
  return (
    <section className="default-page">
      {isArticleLoading ? (
        <CircularProgress />
      ) : (
        <section className="article-box-container">
          <p>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </p>
          <h1>{article.title}</h1>
          <p title={new Date(article.created_at).toLocaleString()}>
            {article.created_at.slice(0, 10)}
          </p>
          <p>{article.author}</p>
          <p>{article.body}</p>
          <div className="article-image-container">
            <img
              className="article-box-image"
              src={article.article_img_url}
            ></img>
          </div>
          <ButtonGroup
            className="votes-horizontal"
            variant="outlined"
            aria-label="Basic button group"
          >
            <Votes
              article_id={article.article_id}
              votes={article.votes}
              setVoteError={setVoteError}
            />
          </ButtonGroup>
          {voteError ? (
            <div>
              <Alert severity="error">{voteError}</Alert>
            </div>
          ) : null}
        </section>
      )}
      <Divider />
      <section className="comment-section-container">
        {isCommentsLoading ? (
          <CircularProgress />
        ) : (
          comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })
        )}
      </section>
    </section>
  );
}

export default Article;
