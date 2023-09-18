import React from "react";
import Styles from "./Serach.module.css";
import Footer from "../home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={Styles.searchContainer}>
      <div className={Styles.searchHeader}>
        <div className={Styles.inputBox}>
          <FontAwesomeIcon
            className={Styles.MagnifyingGlassIcon}
            icon={faMagnifyingGlass}
          />
          <input className={Styles.input} type="text" placeholder="Search" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
