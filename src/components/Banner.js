import React from "react";

import styled from "styled-components";

import banner from "../img/banner.jpg";

const BannerStyle = styled.main`
  width: 600px;
  height: 300px;
  img {
    width: inherit;
    height: inherit;
  }
`;

const Banner = () => {
  return (
    <BannerStyle>
      <img src={banner} alt="banner" />
    </BannerStyle>
  );
};

export default Banner;
