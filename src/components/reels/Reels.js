import Styles from "./Reels.module.css";
import Video from "./Video";
import Footer from "../home/Footer";
import vid1 from "../Video/vid1.mp4";
import vid2 from "../Video/vid2.mp4";
import vid3 from "../Video/vid3.mp4";
import vid4 from "../Video/vid4.mp4";

const Reels = ({ storyPicture }) => {
  const videos = [
    {
      profileName: "Janko",
      caption: "Tristan Tate mma debut",
      videoUrl: vid1,
      key: "1",
    },
    {
      profileName: "Marko",
      caption: "Mercedes-Benz AMG",
      videoUrl: vid2,
      key: "1",
    },
    {
      profileName: "Petko",
      caption: "Cutting bullet with a catana",
      videoUrl: vid3,
      key: "1",
    },
    {
      profileName: "Nikola",
      caption: "Mark Cuban question",
      videoUrl: vid4,
      key: "1",
    },
  ];

  return (
    <div>
      <div className={Styles.container}>
        {videos.map((list) => (
          <Video
            storyPicture={storyPicture}
            key={list.key}
            profilePictureUrl
            profileName={list.profileName}
            caption={list.caption}
            videoUrl={list.videoUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Reels;
