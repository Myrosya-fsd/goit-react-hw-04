import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div>
      <h2>Loading...</h2>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
