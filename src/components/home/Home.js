import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Comments from "../comments/Comments";
import Timeline from "./Timeline";

const Home = ({ storyPicture }) => {
  const [commentsPopup, setCommentsPopup] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "nikola",
      postImage: storyPicture,
      timestamp: "30min",
    },
    {
      id: 2,
      user: "marko",
      postImage: storyPicture,
      timestamp: "1h",
    },
    {
      id: 3,
      user: "janko",
      postImage: storyPicture,
      timestamp: "1d",
    },
    {
      id: 4,
      user: "petko",
      postImage: storyPicture,
      timestamp: "2d",
    },
  ]);

  return (
    <>
      <Header storyPicture={storyPicture} />

      <Timeline
        setCommentsPopup={setCommentsPopup}
        storyPicture={storyPicture}
        posts={posts}
      />

      <Footer />

      <Comments
        setCommentsPopup={setCommentsPopup}
        commentsTrigger={commentsPopup}
        storyPicture={storyPicture}
      />
    </>
  );
};

export default Home;
