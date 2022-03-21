import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "./store/articlesSlice";

import NewsletItem from "../../ui-elements/newslet-item/NewsletItem";

const Feed = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      {articles.data.data && (
        <Masonry columns={{ lg: 4, md: 3, sm: 2, xs: 1 }} spacing={2}>
          {articles.data.data.map((item, index) => (
            <div key={index}>
              <NewsletItem article={item} />
            </div>
          ))}
        </Masonry>
      )}
    </Box>
  );
};

export default Feed;
