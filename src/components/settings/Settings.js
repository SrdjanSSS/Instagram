import React from "react";
import Styles from "./Settings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCircleXmark,
  faClock,
  faClockRotateLeft,
  faCreditCard,
  faGear,
  faList,
  faQrcode,
  faStar,
  faStroopwafel,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Settings = ({ settingsTrigger, setSettingsPopup }) => {
  return settingsTrigger ? (
    <div className={Styles.settingsContainer}>
      <motion.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        className={Styles.settingsBox}
      >
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/settings/privacy"}
          >
            <h4 className={Styles.textBox}>
              <FontAwesomeIcon className={Styles.icon} icon={faGear} /> Settings
              and privacy
            </h4>
          </Link>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faStroopwafel} />{" "}
            Threads
          </h4>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faClock} /> Your
            activity
          </h4>
          <h4 className={Styles.textBox}>
            {" "}
            <FontAwesomeIcon
              className={Styles.icon}
              icon={faClockRotateLeft}
            />{" "}
            Archive
          </h4>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faQrcode} /> QR code
          </h4>
          <h4 className={Styles.textBox}>
            {" "}
            <FontAwesomeIcon className={Styles.icon} icon={faBookmark} /> Saved
          </h4>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faUserGroup} />{" "}
            Supervision
          </h4>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faCreditCard} />{" "}
            Orders and payment
          </h4>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faList} /> Close
            friends
          </h4>
          <h4 className={Styles.textBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faStar} /> Favourites
          </h4>
        </div>
        <div className={Styles.xIconBox}>
          <FontAwesomeIcon
            onClick={() => setSettingsPopup(false)}
            className={Styles.xicon}
            icon={faCircleXmark}
          />
        </div>
      </motion.div>
    </div>
  ) : (
    ""
  );
};

export default Settings;
