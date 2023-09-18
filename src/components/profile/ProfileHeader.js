import React from "react";
import Styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const ProfileHeader = ({ setSettingsPopup }) => {
  const user = useSelector(selectUser);

  return (
    <div className={Styles.header}>
      <h2 className={Styles.profileName}>{user.username}</h2>
      <div className={Styles.iconBox}>
        <FontAwesomeIcon className={Styles.squareIcon} icon={faSquarePlus} />
        <FontAwesomeIcon
          onClick={() => setSettingsPopup(true)}
          className={Styles.barsIcon}
          icon={faBars}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
