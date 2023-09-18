import Style from "./Messages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPenToSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const MessagesHeader = (props) => {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={Style.header}>
        <div className={Style.nameArrowBox}>
          <Link style={{ color: "white" }} to={"/"}>
            <FontAwesomeIcon className={Style.arrow} icon={faArrowLeft} />
          </Link>
          <h2 className={Style.profileName}>{user.username}</h2>
        </div>
        <FontAwesomeIcon
          onClick={() => props.setChatPopup(true)}
          className={Style.penIcon}
          icon={faPenToSquare}
        />
      </div>
      <div className={Style.searchBox}>
        <FontAwesomeIcon
          className={Style.MagnifyingGlassIcon}
          icon={faMagnifyingGlass}
        />
        <input className={Style.search} type="search" placeholder="Search" />
      </div>
    </>
  );
};

export default MessagesHeader;
