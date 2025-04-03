import { Divider } from "@mui/material";

function CommentCard({ comment }) {
  console.log(comment);
  return (
    <div className="comment-card">
      <h2>{comment.author}</h2>
      <p title={new Date(comment.created_at).toLocaleString()}>
        {comment.created_at.slice(0, 10)}
      </p>
      <p>{comment.body}</p>
      <Divider />
      <p>votes: {comment.votes}</p>
    </div>
  );
}

export default CommentCard;
