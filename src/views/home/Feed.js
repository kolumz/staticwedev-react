import React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import NewsletItem from "../ui-elements/newslet-item/NewsletItem";

const itemData = [
  {
    img: {
      url: "https://c.ndtvimg.com/2022-02/10luiu7s_ukraine-tank_625x300_27_February_22.jpg?im=Resize=(1230,900)",
      title: "Fern",
      height: 250,
    },
    title: `In light of the ongoing war conflict in Ukraine, the International Judo Federation announces the suspension of Mr. Vladimir Putin's status`,
    creator: {
      name: "Ahmed Alawi",
      img: "https://mui.com/static/images/avatar/5.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/2/27/0a5c4fbe-8bb4-40e3-9298-4e74ad23016a.jpg",
      title: "Fern",
      height: 190,
    },
    title: `Putin puts nuclear deterrent on 'special alert`,
    creator: {
      name: "Thom Poole",
      img: "https://mui.com/static/images/avatar/1.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/F8CC/production/_123429636_gettyimages-1238744768.jpg",
      title: "Fern",
      height: 250,
    },
    title: `Ukrainian President Volodymyr Zelensky, a comedian who had no experience of politics when elected less than three years ago, has suddenly emerged as a convincing war leader`,
    creator: {
      name: "George Bowden",
      img: "https://mui.com/static/images/avatar/2.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/AC3B/production/_123419044_gettyimages-1233136705.jpg",
      title: "Fern",
      height: 200,
    },
    title: `Russia has been expanding its influence in Africa in recent years and after the invasion of Ukraine, it will be expecting its new-found allies to provide support, or at least remain neutral, in international bodies such as the UN.`,
    creator: {
      name: "Viktoriia Zhuhan",
      img: "https://mui.com/static/images/avatar/3.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/2/27/4fa81dc5-160e-4e39-a6de-2d2189b395c1.jpg",
      title: "Fern",
      height: 185,
    },
    title: `Fight for payment of UK pensions lost in Yemen warzone`,
    creator: {
      name: "Simon Jack",
      img: "https://mui.com/static/images/avatar/4.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/28E2/production/_120866401_mediaitem120866400.jpg",
      title: "Fern",
      height: 240,
    },
    title: `Fight for payment of UK pensions lost in Yemen warzone`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/6.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://c.ndtvimg.com/2022-02/10luiu7s_ukraine-tank_625x300_27_February_22.jpg?im=Resize=(1230,900)",
      title: "Fern",
      height: 250,
    },
    title: `In light of the ongoing war conflict in Ukraine, the International Judo Federation announces the suspension of Mr. Vladimir Putin's status`,
    creator: {
      name: "the pin",
      img: "https://mui.com/static/images/avatar/5.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/2/27/0a5c4fbe-8bb4-40e3-9298-4e74ad23016a.jpg",
      title: "Fern",
      height: 190,
    },
    title: `Putin puts nuclear deterrent on 'special alert`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/1.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/F8CC/production/_123429636_gettyimages-1238744768.jpg",
      title: "Fern",
      height: 250,
    },
    title: `Ukrainian President Volodymyr Zelensky, a comedian who had no experience of politics when elected less than three years ago, has suddenly emerged as a convincing war leader`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/2.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/AC3B/production/_123419044_gettyimages-1233136705.jpg",
      title: "Fern",
      height: 200,
    },
    title: `Russia has been expanding its influence in Africa in recent years and after the invasion of Ukraine, it will be expecting its new-found allies to provide support, or at least remain neutral, in international bodies such as the UN.`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/3.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/2/27/4fa81dc5-160e-4e39-a6de-2d2189b395c1.jpg",
      title: "Fern",
      height: 185,
    },
    title: `Fight for payment of UK pensions lost in Yemen warzone`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/4.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/28E2/production/_120866401_mediaitem120866400.jpg",
      title: "Fern",
      height: 240,
    },
    title: `Fight for payment of UK pensions lost in Yemen warzone`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/6.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://c.ndtvimg.com/2022-02/10luiu7s_ukraine-tank_625x300_27_February_22.jpg?im=Resize=(1230,900)",
      title: "Fern",
      height: 250,
    },
    title: `In light of the ongoing war conflict in Ukraine, the International Judo Federation announces the suspension of Mr. Vladimir Putin's status`,
    creator: {
      name: "the pin",
      img: "https://mui.com/static/images/avatar/5.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/2/27/0a5c4fbe-8bb4-40e3-9298-4e74ad23016a.jpg",
      title: "Fern",
      height: 190,
    },
    title: `Putin puts nuclear deterrent on 'special alert`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/1.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/F8CC/production/_123429636_gettyimages-1238744768.jpg",
      title: "Fern",
      height: 250,
    },
    title: `Ukrainian President Volodymyr Zelensky, a comedian who had no experience of politics when elected less than three years ago, has suddenly emerged as a convincing war leader`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/2.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/AC3B/production/_123419044_gettyimages-1233136705.jpg",
      title: "Fern",
      height: 200,
    },
    title: `Russia has been expanding its influence in Africa in recent years and after the invasion of Ukraine, it will be expecting its new-found allies to provide support, or at least remain neutral, in international bodies such as the UN.`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/3.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/2/27/4fa81dc5-160e-4e39-a6de-2d2189b395c1.jpg",
      title: "Fern",
      height: 185,
    },
    title: `Fight for payment of UK pensions lost in Yemen warzone`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/4.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
  {
    img: {
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/28E2/production/_120866401_mediaitem120866400.jpg",
      title: "Fern",
      height: 240,
    },
    title: `Fight for payment of UK pensions lost in Yemen warzone`,
    creator: {
      name: "Author_name",
      img: "https://mui.com/static/images/avatar/6.jpg",
    },
    pulishDate: "febraury 25, 2022",
  },
];

const feed = () => {
  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={{ lg: 4, md: 3, sm: 2, xs: 1 }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <NewsletItem data={item} />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default feed;
