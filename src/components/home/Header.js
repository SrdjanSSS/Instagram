import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSquarePlus,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Story from "./Story";
import { Link } from "react-router-dom";

const Header = ({ storyPicture }) => {
  const stories = [
    {
      id: 1,
      storyName: "Nikola",
      storyImg: "",
    },
    {
      id: 2,
      storyName: "Marko",
      storyImg: "",
    },
    {
      id: 3,
      storyName: "Jovan",
      storyImg: "",
    },
    {
      id: 4,
      storyName: "Dragan",
      storyImg: "",
    },
    {
      id: 5,
      storyName: "Mirko",
      storyImg: "",
    },
    {
      id: 6,
      storyName: "Petko",
      storyImg: "",
    },
  ];

  return (
    <div className="header-box">
      <div className="header">
        <h1 className="tittle">Instagram</h1>
        <div className="icon-header-box">
          <FontAwesomeIcon className="icon" icon={faSquarePlus} />

          <FontAwesomeIcon className="icon" icon={faHeart} />
          <Link style={{ color: "white" }} to={"/messages"}>
            <FontAwesomeIcon className="icon" icon={faMessage} />
          </Link>
        </div>
      </div>
      <div className="stories-box">
        {stories.map((list) => (
          <Story
            storyName={list.storyName}
            id={list.id}
            storyPicture={storyPicture}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
