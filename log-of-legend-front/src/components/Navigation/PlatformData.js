import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getPlatformData } from "../../util/reducers/navigationReducer";

const PlatformDataStyle = styled.div`
  width: 600px;
  color: white;
  font-size: 0.8rem;
  .PlatformData-container {
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 602px) {
    width: calc(100vw - 2px);
  }
`;
function PlatformData() {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.navigationReducer.platformData,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlatformData());
  }, [dispatch, getPlatformData]);

  return (
    <PlatformDataStyle>
      {isLoaded && data && (
        <div className="PlatformData-container">
          <strong>지역 : 아시아</strong>
          <strong>국가 : ko_KR</strong>
          <strong>서버상태 : 🟢</strong>
          <strong>Client 버전 : ver11.1</strong>
          <strong></strong>
        </div>
      )}
    </PlatformDataStyle>
  );
}

export default memo(PlatformData);
