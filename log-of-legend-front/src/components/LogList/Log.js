import React from "react";
import styled from "styled-components";

const LogStyle = styled.section`
  width: 600px;
  height: 100px;
  background-color: rgb(20, 20, 20);
  color: white;



  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: calc(100vw - 2px);
  }
  @media (max-width: 340px) {
  }
`;

export default function Log() {
  return <LogStyle>TESTESTESTSESTRE</LogStyle>;
}
