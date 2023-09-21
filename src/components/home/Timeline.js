import React from "react";
import PostBox from "./PostBox";

const Timeline = ({ posts, storyPicture, setCommentsPopup }) => {
  return (
    <div className="timeline">
      {posts.map((post) => (
        <PostBox
          setCommentsPopup={setCommentsPopup}
          user={post.user}
          profileImage={post.profileImage}
          postImg={post.postImg}
          timestamp={post.timestamp}
          storyPicture={storyPicture}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default Timeline;
