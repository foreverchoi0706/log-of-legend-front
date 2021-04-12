import React from "react";
//styles
import styles from "../styles/Footer.module.scss";
//images
import riot from "../images/riot.png";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <strong>©CopyRight All Reserved foreverChoi</strong>
      <strong>
        API Used By
        <img src={riot} alt="riot" />
      </strong>
    </footer>
  );
}

export default Footer;
