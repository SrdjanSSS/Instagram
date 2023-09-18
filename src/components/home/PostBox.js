import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

const PostBox = ({
  postImage,
  user,
  timestamp,
  storyPicture,
  setCommentsPopup,
  id,
}) => {
  const heartRef = useRef();
  const BookmarkRef = useRef();
  const [heartColor, setHeartColor] = useState(false);
  const [bookMarkcolor, setbookMarkcolor] = useState(false);

  const onHeartClick = () => {
    if (!heartColor) {
      heartRef.current.style.color = "red";
      setHeartColor(true);
    } else {
      heartRef.current.style.color = "white";
      setHeartColor(false);
    }
  };

  const onBookmarkClick = () => {
    if (!bookMarkcolor) {
      BookmarkRef.current.style.color = "purple";
      setbookMarkcolor(true);
    } else {
      BookmarkRef.current.style.color = "white";
      setbookMarkcolor(false);
    }
  };

  return (
    <div key={id} className="post-box">
      <div className="post-name-box">
        <div className="profile-post-name-box">
          <div
            className="profile-post-btn"
            style={{
              backgroundImage: `url("${postImage}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <h5 className="profile-name">
            {user.charAt(0).toUpperCase() + user.slice(1).toLowerCase()}
          </h5>
          <h5 className="timestamp">{timestamp}</h5>
        </div>
        <FontAwesomeIcon className="dots" icon={faEllipsis} />
      </div>
      <div
        className="post"
        style={{
          backgroundImage: `url("${storyPicture}")`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="interaction-box">
        <div>
          <FontAwesomeIcon
            onClick={onHeartClick}
            ref={heartRef}
            className="post-icons heart"
            icon={faHeart}
          />
          <FontAwesomeIcon
            onClick={() => setCommentsPopup(true)}
            className="post-icons"
            icon={faComment}
          />
          <FontAwesomeIcon className="post-icons" icon={faPaperPlane} />
        </div>
        <FontAwesomeIcon
          onClick={onBookmarkClick}
          ref={BookmarkRef}
          className="post-icons"
          icon={faBookmark}
        />
      </div>
      <div className="comment-box">
        <div className="like-information-box">
          <div
            className="comment-profile-btn-1"
            style={{
              backgroundImage: `url("${storyPicture}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="comment-profile-btn-2"
            style={{
              backgroundImage: `url("${storyPicture}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="comment-profile-btn-3"
            style={{
              backgroundImage: `url("${storyPicture}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <h5 className="like-information">Liked by Mica and others</h5>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
