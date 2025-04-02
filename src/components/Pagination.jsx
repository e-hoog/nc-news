import { Box, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

function Pagination({ items, perPage, page, setPage }) {
  const [nextDisabled, setNextDisabled] = useState("");
  const [prevDisabled, setPrevDisabled] = useState(true);
  function handlePrevClick() {
    setNextDisabled("");
    if (page - 1 === 1) {
      setPrevDisabled(true);
      setPage(page - 1);
    } else {
      setPrevDisabled("");
      setPage(page - 1);
    }
  }
  function handleNextClick() {
    setPrevDisabled("");
    if (items < (page + 1) * perPage) {
      setNextDisabled(true);
      setPage(page + 1);
    } else {
      setNextDisabled("");
      setPage(page + 1);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button
          key="prevPage"
          disabled={prevDisabled}
          onClick={handlePrevClick}
        >
          Previous Page
        </Button>
        <Button
          key="nextPage"
          disabled={nextDisabled}
          onClick={handleNextClick}
        >
          Next Page
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Pagination;
