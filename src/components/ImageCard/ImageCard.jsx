import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        className={styles.img}
        width="300"
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
