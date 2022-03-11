import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import * as moment from "moment";
import "moment/locale/ar";

export default function NewsletItem({ article }) {
  return (
    <Card style={{ borderRadius: "24px" }} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // height={article.img.height}
        image={article.urlToImage}
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          // article.creator
          //   .img ? // <Avatar alt="Remy Sharp" src={article.creator.img} />
          // null : (
          //   )
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user1"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.author}
        subheader={moment(article.publishedAt).locale("en").format("LL")}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {article.title}
        </Typography>
      </CardContent>
      <CardActions className="justify-content-between" disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <div>
          <IconButton aria-label="verify">
            <CheckCircleIcon />
          </IconButton>
          <IconButton aria-label="shareIn">
            <ReplyIcon />
          </IconButton>
          <IconButton aria-label="shareOut">
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
