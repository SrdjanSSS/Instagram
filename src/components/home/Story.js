import React from "react";

const Story = ({ storyPicture, storyName, id }) => {
  return (
    <div key={id} className="story">
      <div
        className="story-btn"
        style={{
          backgroundImage: `url("${storyPicture}")`,
          backgroundSize: "cover",
        }}
      ></div>
      <h5 className="story-name">{storyName}</h5>
    </div>
  );
};

export default Story;
