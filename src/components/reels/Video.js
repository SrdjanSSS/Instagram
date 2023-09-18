import React, { useRef, useState } from "react";
import Styles from "./Reels.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faComment,
  faEllipsis,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Video = ({ profileName, caption, videoUrl, storyPicture }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      vidRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const mouseEnter = () => {
    vidRef.current.play();
  };

  const mouseLeave = () => {
    vidRef.current.pause();
  };

  return (
    <div className={Styles.videoContainer}>
      <h2 className={Styles.reelsTittle}>Reels</h2>
      <FontAwesomeIcon className={Styles.cameraIcon} icon={faCamera} />
      <video
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={Styles.videoPlayer}
        onClick={onVideoClick}
        ref={vidRef}
        src={videoUrl}
        loop
      ></video>
      <div className={Styles.interactionBox}>
        <div className={Styles.textBox}>
          <div className={Styles.profileBox}>
            <div
              style={{
                backgroundImage: `url("${storyPicture}")`,
                backgroundSize: "cover",
              }}
              className={Styles.profilePicture}
            />
            <h5 className={Styles.profileName}>{profileName}</h5>
            <button className={Styles.followBtn}>Follow</button>
          </div>
          <div className={Styles.captionBox}>
            <p className={Styles.p1}>{caption}</p>
            <div className={Styles.likeInfo}>
              <div />
              <div />
              <p className={Styles.p2}>Liked by Neko and others</p>
            </div>
          </div>
        </div>
        <div className={Styles.iconBox}>
          <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
          <FontAwesomeIcon className={Styles.icon} icon={faComment} />
          <FontAwesomeIcon className={Styles.icon} icon={faPaperPlane} />
          <FontAwesomeIcon className={Styles.icon} icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default Video;
