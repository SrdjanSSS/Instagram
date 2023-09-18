import React from "react";
import ProfileDescription from "./ProfileDescription";
import ProfilePostBox from "./ProfilePostBox";
import Footer from "../home/Footer";
import Settings from "../settings/Settings";
import ProfileHeader from "./ProfileHeader";

const Profile = ({ setSettingsPopup, settingsPopup, storyPicture }) => {
  return (
    <div>
      <ProfileHeader setSettingsPopup={setSettingsPopup} />
      <ProfileDescription storyPicture={storyPicture} />
      <ProfilePostBox />
      <Footer />
      <Settings
        settingsTrigger={settingsPopup}
        setSettingsPopup={setSettingsPopup}
      />
    </div>
  );
};

export default Profile;
