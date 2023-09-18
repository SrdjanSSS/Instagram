import React from "react";
import Style from "./Messages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const NewMessage = ({ setInboxPopup, setChatPopup, trigger, storyPicture }) => {
  const [followerName, setFolowwerName] = useState([
    "Jovan",
    "Dejan",
    " Bane",
    "Mile",
    "Zile",
    "Goran",
    "Bojan",
    "Zika",
    "Milan",
    "Dragan",
    "Stanoje",
  ]);
  const [searchTerm, setSerachTerm] = useState("");

  return trigger ? (
    <motion.div
      initial={{ y: 400, scale: 0 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
      className={Style.newMessageBox}
    >
      <div className={Style.newMessageHeader}>
        <h4 className={Style.newMessageTittle}>New Chat</h4>
        <FontAwesomeIcon
          onClick={() => setChatPopup(false)}
          className={Style.xicon}
          icon={faCircleXmark}
        />
      </div>
      <div className={Style.searchBox}>
        <FontAwesomeIcon
          className={Style.MagnifyingGlassIcon}
          icon={faMagnifyingGlass}
        />
        <input
          onChange={(e) => setSerachTerm(e.target.value)}
          className={Style.search}
          type="search"
          placeholder="Search"
        />
      </div>

      <div className={Style.overflowBox}>
        {followerName
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
              return value;
            }
          })
          .map((name) => (
            <div
              onClick={() => setInboxPopup(true)}
              className={Style.followerBox}
            >
              <div className={Style.pictureNameBox}>
                <div
                  className={Style.followerPicture}
                  style={{
                    backgroundImage: `url("${storyPicture}")`,
                    backgroundSize: "cover",
                  }}
                />
                <h3 className={Style.followerName}>{name}</h3>
              </div>
              <FontAwesomeIcon className={Style.cameraIcon} icon={faCamera} />
            </div>
          ))}
      </div>
    </motion.div>
  ) : (
    ""
  );
};

export default NewMessage;
