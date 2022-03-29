import React, { useEffect, useState } from "react";
import { Button, Paper, Grid, Container, TextField } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, getPost } from "../../../redux/actions/posts";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const navigate = useNavigate();
  const currentId = useSelector((state) => state.currentId.currentId);
  // console.log(currentId);
  const post = useSelector((state) => {
    return currentId ? state.posts.find((p) => p._id === currentId) : null;
  });
  const user = JSON.parse(localStorage.getItem("profile"));
  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((message) => message._id === currentId) : null
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (currentId) {
      dispatch(
        updatePost(navigate, currentId, {
          ...postData,
          name: user?.result?.name,
        })
      );
    } else {
      dispatch(createPost(navigate, { ...postData, name: user?.result?.name }));
    }
    clear();
  };

  const clear = () => {
    dispatch(getPost(null));
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Container component="main" maxWidth="md">
      <Paper
        className="rounded_border d-flex mt-4 p-4 flex-column align-items-center"
        elevation={6}
      >
        <form onSubmit={(e) => handleSubmit(e)} className="w-100 mt-4">
          <Grid container spacing={2}>
            <TextField
              label="title"
              name="title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="message"
              name="message"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="tags"
              name="tags"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
              variant="outlined"
              required
              fullWidth
            />
            <div>
              <FileBase
                type="file"
                muliple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
          </Grid>
          <Button type="submit">save</Button>
          <Button onClick={clear}>clear</Button>
        </form>
      </Paper>
    </Container>
  );
};
export default CreatePost;
