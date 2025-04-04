import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Alert, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useApiRequest from "./useApiRequest";
import { postCommentByArticleId } from "../utils/api";

function PostComment({ article_id, setComments }) {
  const { user } = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  function handleCommentInput(event) {
    setCommentText(event.target.value);
    if (event.target.value) {
      setSubmitDisabled("");
    } else {
      setSubmitDisabled(true);
    }
  }
  function handleCommentSubmit(event) {
    event.preventDefault();
    setSubmitDisabled(true);
    setSubmitSuccess(null);
    setCommentMessage("");
    postCommentByArticleId(article_id, {
      username: user.username,
      body: commentText,
    })
      .then((comment) => {
        setCommentMessage("Comment successfully posted.");
        setSubmitSuccess(true);
        setCommentText("");
        setComments((currComments) => {
          return [comment, ...currComments];
        });
      })
      .catch((err) => {
        setSubmitDisabled("");
        setSubmitSuccess(false);
        setCommentMessage("Could not post comment. Please try again!");
      });
  }
  return (
    <div className="comment-card">
      <h2>Post a comment:</h2>
      {user ? (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            onInput={handleCommentInput}
            type="text"
            id="comment-text"
            name="comment-text"
            rows="5"
            value={commentText}
          ></textarea>
          <Button disabled={submitDisabled} type="submit" variant="outlined">
            Submit
          </Button>
          {submitSuccess === null ? null : submitSuccess ? (
            <Alert severity="success">{commentMessage}</Alert>
          ) : (
            <Alert severity="error">{commentMessage}</Alert>
          )}
        </form>
      ) : (
        <>
          <p>You must be signed in to post a comment.</p>
          <Link to={"/login"}>
            <Button variant="outlined">Log In</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default PostComment;
