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
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 5px;
    width: inherit;
  }
  @media (max-width: 600px) {
    width: calc(100vw - 2px);
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
