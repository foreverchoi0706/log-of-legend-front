import React from "react";
import styled from "styled-components";

import riot from "../img/riot.png";

const FooterStyle = styled.footer`
  width: 600px;

  background-color: gold;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  strong {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 40px;
    }
  }

  @media (max-width: 600px) {
    width: calc(100vw);
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <strong>©CopyRight All Reserved foreverChoi</strong>
      <strong>
        API Used By
        <img src={riot} alt="riot" />
      </strong>
    </FooterStyle>
  );
}
