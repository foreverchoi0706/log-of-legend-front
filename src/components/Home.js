import React from "react";
import styled from "styled-components";

import Banner from "./Banner";

const HomeStyle = styled.main`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return <HomeStyle>
      <Banner/>
  </HomeStyle>;
};

export default Home;
