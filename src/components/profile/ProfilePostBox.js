import React, { useState } from "react";
import Styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faTableCells,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import TaggedPosts from "./TaggedPosts";

const ProfilePostBox = () => {
  const [taggedPopup, setTaggedPopup] = useState(false);

  return (
    <div>
      <div className={Styles.profilePostBox}>
        <div className={Styles.profileNav}>
          <FontAwesomeIcon
            onClick={() => setTaggedPopup(false)}
            className={Styles.tableIcon}
            icon={faTableCells}
          />
          <FontAwesomeIcon
            onClick={() => setTaggedPopup(true)}
            className={Styles.tagIcon}
            icon={faUsersLine}
          />
        </div>
        <div className={Styles.profilePosts}>
          <div className={Styles.cameraIconBox}>
            <FontAwesomeIcon className={Styles.cameraIcon} icon={faCamera} />
          </div>
          <h2>No Posts Yet</h2>
        </div>
      </div>
      <TaggedPosts taggedPostTrigger={taggedPopup} />
    </div>
  );
};

export default ProfilePostBox;
