import React, { useEffect, useRef } from "react";
//styles
import styles from "../styles/ToTop.module.scss";
//images
import poroading from "../images/poroading.png";

function ToTop() {
  const refDiv = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nowPosition = window.scrollY;
      const halfWindowHeight = window.innerHeight / 2;
      const halfDocHeigth = document.body.scrollHeight / 2;

      const style = refDiv.current.style;
      let right = -200;
      if (
        halfDocHeigth > 1000 &&
        halfDocHeigth - (halfWindowHeight + nowPosition) <= 0
      ) {
        right = 20;
      }
      style.right = `${right}px`;
      style.transitionProperty = "right";
      style.transitionDuration = "2s";
    });
  }, []);

  return (
    <div className={styles.ToTop} ref={refDiv}>
      <a href="#top">
        <img src={poroading} alt="poro" />
      </a>
    </div>
  );
}

export default ToTop;
