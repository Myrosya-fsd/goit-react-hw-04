import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div>
      <span className={styles.loader}></span>
      <h2>Loading...</h2>
    </div>
  );
}

export default Loader;
