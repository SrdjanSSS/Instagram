import React from "react";
import Styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileDescription = ({ storyPicture }) => {
  return (
    <div className={Styles.profileDescription}>
      <div className={Styles.followerCountBox}>
        <div
          style={{
            backgroundImage: `url("${storyPicture}")`,
            backgroundSize: "cover",
          }}
          className={Styles.profilePicture}
        />

        <div className={Styles.postNum}>
          <h4>2</h4>
          <h5>Posts</h5>
        </div>
        <div className={Styles.followersNum}>
          <h4>319</h4>
          <h5>Followers</h5>
        </div>
        <div className={Styles.followingNum}>
          <h4>286</h4>
          <h5>Following</h5>
        </div>
      </div>
      <div className={Styles.buttonBox}>
        <button className={Styles.btn}>Edit Profile</button>
        <button className={Styles.btn}>Share Profile</button>
        <button className={Styles.AddFollowerBtn}>
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </div>
      <div className={Styles.AddStoryBox}>
        <div className={Styles.AddStory}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <h5>New</h5>
      </div>
    </div>
  );
};

export default ProfileDescription;
