import { Divider, Alert } from "@mui/material";
import DeleteButton from "./DeleteButton";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";

function CommentCard({ comment }) {
  const [deleteError, setDeleteError] = useState("");
  const { user } = useContext(UserContext);
  const [deleted, setDeleted] = useState(false);
  return !deleted ? (
    <div className="comment-card">
      {" "}
      {!user || user.username !== comment.author ? null : (
        <DeleteButton
          comment_id={comment.comment_id}
          setDeleteError={setDeleteError}
          setDeleted={setDeleted}
        />
      )}
      <h2>{comment.author}</h2>
      <p title={new Date(comment.created_at).toLocaleString()}>
        {comment.created_at.slice(0, 10)}
      </p>
      <p>{comment.body}</p>
      <Divider />
      <p>votes: {comment.votes}</p>
      {deleteError ? (
        <>
          <Divider /> <Alert severity="error">{deleteError}</Alert>
        </>
      ) : null}
    </div>
  ) : null;
}

export default CommentCard;
