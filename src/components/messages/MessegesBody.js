import React from "react";
import Style from "./Messages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";

const MessegesBody = () => {
  return (
    <div className={Style.errorContainer}>
      <FontAwesomeIcon className={Style.messageSlash} icon={faCommentSlash} />
      <h4 className={Style.errorMessage}>No messages found</h4>
    </div>
  );
};

export default MessegesBody;
