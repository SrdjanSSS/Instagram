import React, { useRef, useState } from "react";
import Styles from "./Comments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CommentBox = ({ profileName, comment, likes, storyPicture, id }) => {
  const heartRef = useRef();
  const [heartColor, setHeartColor] = useState(false);

  const onHeartClick = () => {
    if (!heartColor) {
      heartRef.current.style.color = "red";
      setHeartColor(true);
    } else {
      heartRef.current.style.color = "white";
      setHeartColor(false);
    }
  };

  return (
    <div key={id} className={Styles.commentBox}>
      <div className={Styles.box}>
        <div className={Styles.pictureNameContainer}>
          <div className={Styles.pictureNameBox}>
            <div
              style={{
                backgroundImage: `url("${storyPicture}")`,
                backgroundSize: "cover",
              }}
              className={Styles.picture}
            />
            <h4 className={Styles.profileName}>{profileName}</h4>
          </div>
        </div>
        <div className={Styles.writtenComment}>
          <h3 className={Styles.comment}>{comment}</h3>
          <div className={Styles.likesReplyBox}>
            <h5 className={Styles.likes}> {likes} likes</h5>
            <h5 className={Styles.reply}> reply </h5>
          </div>
        </div>
      </div>
      <div className={Styles.iconBox}>
        <FontAwesomeIcon
          onClick={onHeartClick}
          className={Styles.heartIcon}
          ref={heartRef}
          icon={faHeart}
        />
      </div>
    </div>
  );
};

export default CommentBox;
