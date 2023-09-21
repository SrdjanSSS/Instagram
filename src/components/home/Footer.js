import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faFilm,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-box">
      <Link style={{ color: "white" }} to={"/"}>
        <FontAwesomeIcon className="footer-icon" icon={faHouse} />
      </Link>
      <Link style={{ color: "white" }} to={"/search"}>
        <FontAwesomeIcon className="footer-icon" icon={faMagnifyingGlass} />
      </Link>
      <Link style={{ color: "white" }} to={"/newPost"}>
        <FontAwesomeIcon className="footer-icon" icon={faPlus} />
      </Link>
      <Link style={{ color: "white" }} to={"/reels"}>
        <FontAwesomeIcon className="footer-icon" icon={faFilm} />
      </Link>
      <Link style={{ color: "white" }} to={"/profile"}>
        <FontAwesomeIcon className="footer-icon" icon={faUser} />
      </Link>
    </div>
  );
};

export default Footer;
