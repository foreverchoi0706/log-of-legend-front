import React from "react";
//style
import styles from "../styles/Banner.module.scss";
//styles
import banner from "../images/banner.jpg";

function Banner() {
  return (
    <div className={styles.Banner} id="top">
      <h1 className={styles.Banner_logo}>
        <a href="/">LOG OF LEGEND</a>
      </h1>
      <img className={styles.Banner_img} src={banner} alt="banner" />
    </div>
  );
}

export default Banner;
