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
import { useDispatch } from "react-redux";
import { deletePost, getPost, likePost } from "../../../redux/actions/posts";

import cnn from "../../../assets/cnn.jpg";
import { useNavigate } from "react-router-dom";
import { DeleteForever } from "@mui/icons-material";

export default function NewsletItem({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPost = (id) => {
    dispatch(getPost(id));
    navigate("/create-post");
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const handleLikePost = (id) => {
    dispatch(likePost(id));
  };
  return (
    <Card style={{ borderRadius: "24px" }} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // height={post.img.height}
        image={post.selectedFile ? post.selectedFile : cnn}
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          // post.creator
          //   .img ? // <Avatar alt="Remy Sharp" src={post.creator.img} />
          // null : (
          //   )
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user1"></Avatar>
        }
        action={
          <IconButton
            onClick={() => handleEditPost(post._id)}
            aria-label="settings"
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={post.creator ? post.creator : "john doe"}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
        <Typography className="mt-2" variant="body2" color="text.secondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </CardContent>
      <CardActions className="justify-content-between" disableSpacing>
        <IconButton
          onClick={() => handleLikePost(post._id)}
          aria-label="add to favorites"
        >
          <FavoriteIcon />

          {post.likeCount > 0 ? (
            <>
              <Typography className="mx-1">Like</Typography>
              <Typography>{post.likeCount}</Typography>
            </>
          ) : null}
        </IconButton>
        <IconButton
          onClick={() => handleDeletePost(post._id)}
          aria-label="add to favorites"
        >
          <DeleteForever />
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
