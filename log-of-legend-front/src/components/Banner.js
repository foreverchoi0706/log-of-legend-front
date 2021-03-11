import React from "react";
//style
import styles from "../styles/Banner.module.scss";
//asset
import banner from "../img/banner.jpg";

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <h1>
        <a href="/">Log of Legend</a>
      </h1>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
