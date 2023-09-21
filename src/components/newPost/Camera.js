import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Styles from "./Camera.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PicturePost from "./PicturePost";

export const Camera = ({ posts, setPosts }) => {
  const [picturePostPopup, setPicturePostPopup] = useState(false);
  const [screenshot, setScreenshot] = useState(false);
  const webRef = useRef(null);

  const handleButton = () => {
    setScreenshot(webRef.current.getScreenshot());

    setPicturePostPopup(true);
  };

  const reset = () => {
    setScreenshot(null);
  };

  return (
    <div className={Styles.container}>
      <Link style={{ color: "white" }} to={"/"}>
        <FontAwesomeIcon className={Styles.xIcon} icon={faX} />
      </Link>
      <h2 onClick={reset}>Reset</h2>
      <div className={Styles.webcamBox}>
        <Webcam ref={webRef} className={Styles.webcam} />
      </div>
      <div className={Styles.btnBox}>
        <div onClick={handleButton} className={Styles.btn} />
      </div>
      <div className={Styles.picturePostContainer}>
        <PicturePost
          setPosts={setPosts}
          posts={posts}
          setPicturePostPopup={setPicturePostPopup}
          PicturePostTrigger={picturePostPopup}
        />{" "}
        {screenshot && (
          <img className={Styles.img} alt="" src={screenshot}></img>
        )}
      </div>
    </div>
  );
};
