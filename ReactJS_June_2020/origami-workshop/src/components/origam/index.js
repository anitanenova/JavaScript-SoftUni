import React from "react";
import styles from "./index.module.css";
import imageLogo from "../../images/blue-origami-bird.png";

const Origam = ({ description, autor }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageLogo} />
      <p className={styles.description}>{description}</p>
      <div>
        <span className={styles.user}>
          <small>Autor: </small>
          {autor}
        </span>
      </div>
    </div>
  );
};

export default Origam;
