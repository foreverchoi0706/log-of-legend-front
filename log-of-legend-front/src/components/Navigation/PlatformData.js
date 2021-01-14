import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { platformData } from "../../reducers/apiReducer";

const PlatformDataStyle = styled.div`
  width: 600px;
  color: white;

  @media (max-width: 602px) {
    width: calc(100vw - 2px);
  }
`;

export default function PlatformData() {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.apiReducer.platformData,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(platformData());
  }, [dispatch]);

  return <PlatformDataStyle>this is platformData</PlatformDataStyle>;
}
