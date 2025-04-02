import { Box, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  const buttons = [
    <Link to="/articles">
      <Button key="one">All Articles</Button>
    </Link>,
    <Button key="two">Topic 1</Button>,
    <Button key="three">Topic 2</Button>,
  ];
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
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default NavBar;
