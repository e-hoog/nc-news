import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function ArticleCard() {
  const buttons = [
    <Button key="vote-up">⬆</Button>,
    <Button key="vote-down">⬇</Button>,
  ];
  return (
    <div className="article-card-container">
      <Box
        sx={{
          display: "block",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup orientation="vertical" aria-label="Vertical button group">
          {buttons}
        </ButtonGroup>
      </Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="article placeholder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Article
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ArticleCard;
