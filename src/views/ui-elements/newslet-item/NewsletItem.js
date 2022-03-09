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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function NewsletItem({ data }) {
  return (
    <Card style={{ borderRadius: "24px" }} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height={data.img.height}
        image={data.img.url}
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          data.creator.img ? (
            <Avatar alt="Remy Sharp" src={data.creator.img} />
          ) : (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="user1"></Avatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.creator.name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.title}
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
