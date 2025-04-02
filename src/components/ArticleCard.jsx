import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const buttons = [
    <Button key="vote-up">⬆</Button>,
    <Button key="vote-down">⬇</Button>,
  ];
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`/articles/${article.article_id}`);
  }
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
      <Card sx={{ width: 345 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            sx={{ height: 140 }}
            image={article.article_img_url}
            title={article.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Author: {article.author}
            </Typography>
            <Typography variant="body3" sx={{ color: "text.secondary" }}>
              {article.created_at.slice(0, 10)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ArticleCard;
