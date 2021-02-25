import React from "react";
import styles from "./index.module.css";
import imageLogo from "../../images/blue-origami-bird.png";

const Origam = ({ description, autor, index }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageLogo} />
      <p className={styles.description}>
        <span>{index} - </span>
        {description}
      </p>
      <div>
        <span className={styles.user}>
          <small>Autor: </small>
          {autor.username}
        </span>
      </div>
    </div>
  );
};

export default Origam;
