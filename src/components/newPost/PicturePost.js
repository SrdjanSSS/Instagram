import Styles from "./PicturePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Link } from "react-router-dom";

const PicturePost = ({
  PicturePostTrigger,
  setPicturePostPopup,
  posts,
  screenshot,
  setPosts,
}) => {
  const user = useSelector(selectUser);
  const [myPost, setMyPost] = useState("");

  const addPost = () => {
    const id = Math.floor(Math.random() * 100);

    const newPost = [
      ...posts,
      {
        id: id,
        user: user.username,
        postImg: screenshot,
        profileImg: "",
      },
    ];
    setPosts(newPost);
  };

  const closePopup = () => {
    setPicturePostPopup(false);
  };

  return PicturePostTrigger ? (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <FontAwesomeIcon
          onClick={closePopup}
          className={Styles.chevronIcon}
          icon={faChevronLeft}
        />
        <Link style={{ color: "blue", textDecoration: "none" }} to={"/"}>
          <h2 onClick={addPost} className={Styles.htext}>
            Next
          </h2>
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PicturePost;
