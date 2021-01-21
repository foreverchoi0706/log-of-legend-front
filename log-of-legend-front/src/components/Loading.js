import React, { memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
`;

function Loading() {
  return (
    <LoadingStyle>
      <strong>잠시만 기다려 주십시오...</strong>
      <FontAwesomeIcon icon={faTruckLoading} spin={true} />
    </LoadingStyle>
  );
}

export default memo(Loading);
