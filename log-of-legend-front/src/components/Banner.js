import React from "react";

import styled from "styled-components";

import banner from "../img/banner.jpg";

const BannerStyle = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    a {
      color: gold;
    }
  }
  img {
    border: 1px solid var(--theme-color-border);
    border-radius: 5px;
    box-sizing: border-box;
    width: inherit;
  }
  @media (max-width: 600px) {
    width: calc(100vw);
  }
`;

const Banner = () => {
  return (
    <BannerStyle>
      <h1>
        <a href="/">Log of Legend</a>
      </h1>
      <img src={banner} alt="banner" />
    </BannerStyle>
  );
};

export default Banner;
