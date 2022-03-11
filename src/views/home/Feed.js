import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import NewsletItem from "../ui-elements/newslet-item/NewsletItem";

const Feed = () => {
  const [articles, setArticles] = useState();

  const api =
    "http://api.mediastack.com/v1/news?access_key=c3c53ed9cc2ac2f75b7efa8e813a618f&sources=cnn,bbc&limit=100";
  const getArticles = () => {
    fetch(api)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setArticles(json.data);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      {articles && (
        <Masonry columns={{ lg: 4, md: 3, sm: 2, xs: 1 }} spacing={2}>
          {articles.map((item, index) => (
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
