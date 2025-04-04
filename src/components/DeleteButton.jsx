import { Button } from "@mui/material";
import { deleteCommentById } from "../utils/api";
import { useState } from "react";

function DeleteButton({ comment_id, setDeleteError, setDeleted }) {
  const [deleteDisabled, setDeleteDisabled] = useState("");
  function handleDeleteClick() {
    setDeleteDisabled(true);
    setDeleteError("");
    deleteCommentById(comment_id)
      .then(() => {
        setDeleted(true);
      })
      .catch((err) => {
        setDeleteError("Could not delete comment. Please try again!");
        setDeleteDisabled("");
      });
  }
  return (
    <Button
      onClick={handleDeleteClick}
      disabled={deleteDisabled}
      variant="outlined"
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
