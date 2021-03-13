import React from "react";
//style
import styles from "../styles/Banner.module.scss";
//styles
import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className={styles.Banner} id="top">
      <h1>
        <a href="/">Log of Legend</a>
      </h1>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
