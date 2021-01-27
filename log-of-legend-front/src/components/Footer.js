import React from "react";
import styled from "styled-components";

import riot from "../img/riot.png";

const FooterStyle = styled.footer`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  border: 1px solid var(--theme-color-border);
  color: var(--theme-color-border);
  strong {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 40px;
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
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
