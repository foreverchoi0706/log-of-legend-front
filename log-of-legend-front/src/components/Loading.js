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
      <FontAwesomeIcon icon={faTruckLoading} spin={true} />
    </LoadingStyle>
  );
}

export default memo(Loading);
