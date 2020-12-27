import React from "react";
import styled from "styled-components";

import riot from "../img/riot.png";

const FooterStyle = styled.footer`
  width: 600px;
  background-color: yellow;
  border-radius : 5px;

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
    width: 100vw;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <strong>created by foreverchoi0706</strong>
      <strong>
        API by
        <img src={riot} alt="riot" />
      </strong>
    </FooterStyle>
  );
}
