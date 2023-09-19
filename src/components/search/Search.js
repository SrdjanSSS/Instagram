import React, { useEffect, useState } from "react";
import Styles from "./Serach.module.css";
import Footer from "../home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const apiUrl = "https://picsum.photos/v2/list?page=1&limit=18";

const Search = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${apiUrl}`);

    if (!response.ok) {
      console.error("Network response was not ok");
      return;
    }

    const data = await response.json();
    const urls = data.map((item) => item.download_url);
    setImageUrls(urls);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className={Styles.videoBox}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
            }}
            className={Styles.box}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
