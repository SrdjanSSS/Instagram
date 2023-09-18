import React from "react";
import Styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const TaggedPosts = ({ taggedPostTrigger }) => {
  return taggedPostTrigger ? (
    <div className={Styles.profilePostBox}>
      <div className={Styles.taggedProfilePosts}>
        <div className={Styles.cameraIconBox}>
          <FontAwesomeIcon className={Styles.cameraIcon} icon={faCamera} />
        </div>
        <h2>No Tagged Posts Yet</h2>
      </div>
    </div>
  ) : (
    ""
  );
};

export default TaggedPosts;
