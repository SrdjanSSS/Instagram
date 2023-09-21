import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Comments from "../comments/Comments";
import Timeline from "./Timeline";

const Home = ({ posts, storyPicture }) => {
  const [commentsPopup, setCommentsPopup] = useState(false);

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
