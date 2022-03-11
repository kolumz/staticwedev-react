import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import NewsletItem from "../ui-elements/newslet-item/NewsletItem";

const Feed = () => {
  const [articles, setArticles] = useState();

  const api =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=74d91dc51acf41758e5cab786c8d1d77";
  const getArticles = () => {
    fetch(api)
      .then((res) => res.json())
      .then((json) => {
        setArticles(json.articles);
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
