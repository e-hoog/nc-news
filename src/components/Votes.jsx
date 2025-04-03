import { useState } from "react";
import { patchArticleVotesById } from "./utils/api";
import { Button } from "@mui/material";

function Votes({ votes, article_id, setVoteError }) {
  const [votesCount, setVotesCount] = useState(votes);
  function handleUpvote() {
    console.log("+1");
    setVotesCount((currentVotesCount) => currentVotesCount + 1);
    setVoteError(null);
    patchArticleVotesById(article_id, 1).catch((err) => {
      setVotesCount((currentVotesCount) => currentVotesCount - 1);
      setVoteError("Your vote was not successful. Please try again!");
    });
  }
  function handleDownvote() {
    console.log("-1");
    setVotesCount((currentVotesCount) => currentVotesCount - 1);
    setVoteError(null);
    patchArticleVotesById(article_id, -1).catch((err) => {
      setVotesCount((currentVotesCount) => currentVotesCount + 1);
      setVoteError("Your vote was not successful. Please try again!");
    });
  }

  return (
    <>
      <Button onClick={handleUpvote} key={article_id + "vote-up"}>
        ⬆
      </Button>
      <p className="votes">{votesCount}</p>
      <Button onClick={handleDownvote} key={article_id + "vote-down"}>
        ⬇
      </Button>
    </>
  );
}

export default Votes;
