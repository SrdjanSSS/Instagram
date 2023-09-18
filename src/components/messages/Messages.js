import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessegesBody from "./MessegesBody";
import NewMessage from "./NewMessage";
import Style from "./Messages.module.css";
import Chat from "./Chat";

const Messages = ({
  inboxPopup,
  setInboxPopup,
  chatPopup,
  setChatPopup,
  storyPicture,
}) => {
  return (
    <div className={Style.messageBox}>
      <MessagesHeader setChatPopup={setChatPopup} />
      <MessegesBody />
      <NewMessage
        setInboxPopup={setInboxPopup}
        storyPicture={storyPicture}
        trigger={chatPopup}
        setChatPopup={setChatPopup}
      />
      <Chat chatTrigger={inboxPopup} setInboxPopup={setInboxPopup} />
    </div>
  );
};

export default Messages;
