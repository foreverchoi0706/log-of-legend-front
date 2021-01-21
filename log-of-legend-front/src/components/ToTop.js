import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import poroading from "../img/poroading.png";

const ToTopStyle = styled.div`
  position: fixed;
  right: -200px;
  bottom: 20px;

  img{
    width : 100px;
  }
`;

export default function ToTop() {
  const refDiv = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nowPosition = window.scrollY;
      const halfWindowHeight = window.innerHeight / 2;
      const halfDocHeigth = document.body.scrollHeight / 2;

      const style = refDiv.current.style;
      let right = -200;
      if (halfDocHeigth - (halfWindowHeight + nowPosition) <= 0) {
        right = 20;
      }
      style.right = `${right}px`;
      style.transitionProperty = "right";
      style.transitionDuration = "2s";
    });
  }, []);

  return (
    <ToTopStyle ref={refDiv}>
      <a href="#top">
        <img src={poroading} alt="poro" />
      </a>
    </ToTopStyle>
  );
}
