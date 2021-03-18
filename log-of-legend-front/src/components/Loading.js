import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
//styles
import styles from "../styles/Loading.module.scss";

function Loading() {
  return (
    <div className={styles.Loading}>
      <FontAwesomeIcon icon={faTruckLoading} spin={true} />
    </div>
  );
}

export default memo(Loading);
