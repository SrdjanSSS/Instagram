import React, { useState } from "react";
import Styles from "./Comments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import CommentBox from "./CommentBox";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const Comments = ({ commentsTrigger, setCommentsPopup, storyPicture }) => {
  const user = useSelector(selectUser);
  const [myComment, setMyComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      profileName: "Mirko",
      comment: "asdsadsa",
      likes: "32.521",
    },
    {
      id: 2,
      profileName: "Jovan",
      comment: "asdsadsa",
      likes: "22.321",
    },
    {
      id: 3,
      profileName: "Marko",
      comment: "asdsadsa",
      likes: "18.249",
    },
    {
      id: 4,
      profileName: "Petko",
      comment: "asdsadsa",
      likes: "8221",
    },
  ]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addComment(myComment);
    }
  };

  const addComment = (myComment) => {
    if (myComment.trim() === "") {
      return;
    }

    const id = Math.floor(Math.random() * 100);

    const newComment = [
      ...comments,
      {
        profileName: user.username,
        comment: myComment,
        likes: 0,
        id: id,
      },
    ];
    setComments(newComment);
    setMyComment("");
  };

  return commentsTrigger ? (
    <div className={Styles.commentsContainer}>
      <div className={Styles.commentsHeader}>
        <h2>Comments</h2>
        <FontAwesomeIcon
          onClick={() => setCommentsPopup(false)}
          className={Styles.xicon}
          icon={faCircleXmark}
        />
      </div>
      <div className={Styles.commentsContainerBox}>
        {comments.map((list) => (
          <CommentBox
            storyPicture={storyPicture}
            profileName={list.profileName}
            comment={list.comment}
            likes={list.likes}
            id={list.id}
          />
        ))}
      </div>
      <div className={Styles.commentsFooter}>
        <input
          className={Styles.commentsInput}
          type="text"
          placeholder="Add comment"
          onKeyDown={handleKeyPress}
          value={myComment}
          onChange={(e) => setMyComment(e.target.value)}
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Comments;
