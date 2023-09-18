import React from "react";
import Style from "./Messages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faChevronLeft,
  faCamera,
  faMicrophone,
  faImage,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Chat = ({ setInboxPopup, storyPicture, chatTrigger }) => {
  return chatTrigger ? (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ type: "tween", duration: 0.2 }}
      className={Style.chatContainer}
    >
      <div className={Style.chatHeader}>
        <div className={Style.pictureNameBox}>
          <Link style={{ color: "white" }} to={"/messages"}>
            <FontAwesomeIcon
              onClick={() => setInboxPopup(false)}
              className={Style.chevronIcon}
              icon={faChevronLeft}
            />
          </Link>
          <div
            style={{
              backgroundImage: `url("${storyPicture}")`,
              backgroundSize: "cover",
            }}
            className={Style.followerPicture}
          />
          <h3 className={Style.followerName}>Neko ime</h3>
        </div>
        <div className={Style.chatHeaderIcons}>
          <FontAwesomeIcon className={Style.phoneIcon} icon={faPhone} />
          <FontAwesomeIcon className={Style.videoIcon} icon={faVideo} />
        </div>
      </div>

      <div className={Style.chatBox}>
        <div className={Style.chatFooter}>
          <div className={Style.footerBox}>
            <div className={Style.footerMessageBox}>
              <div className={Style.photoIconBox}>
                <FontAwesomeIcon
                  className={Style.cameraChatIcon}
                  icon={faCamera}
                />
              </div>
              <input
                className={Style.footerInput}
                type="text"
                placeholder="Message..."
              />
            </div>
            <div className={Style.footerIconBox}>
              <FontAwesomeIcon className={Style.micIcon} icon={faMicrophone} />
              <FontAwesomeIcon className={Style.imageIcon} icon={faImage} />
              <FontAwesomeIcon className={Style.noteIcon} icon={faNoteSticky} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ) : (
    ""
  );
};

export default Chat;
