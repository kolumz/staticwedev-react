import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../redux/actions/posts";

import NewsletItem from "../../ui-elements/newslet-item/NewsletItem";
import { CircularProgress } from "@mui/material";

const Feed = () => {
  const posts = useSelector((state) => state.posts);
  const currentId = useSelector((state) => state.currentId.currentId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={{ lg: 4, md: 3, sm: 2, xs: 1 }} spacing={2}>
        {posts.map((item, index) => (
          <div key={item._id}>
            <NewsletItem post={item} />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default Feed;
