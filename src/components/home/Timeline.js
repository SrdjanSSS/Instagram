import React from "react";
import PostBox from "./PostBox";

const Timeline = ({ posts, storyPicture, setCommentsPopup }) => {
  return (
    <div className="timeline">
      {posts.map((post) => (
        <PostBox
          setCommentsPopup={setCommentsPopup}
          user={post.user}
          postImage={post.postImage}
          timestamp={post.timestamp}
          storyPicture={storyPicture}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default Timeline;
