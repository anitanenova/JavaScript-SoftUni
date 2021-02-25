import React from "react";
import styles from "./index.module.css";

const SubmitButton = (props) => {
  return <button className={styles.submit}>{props.title}</button>;
};

export default SubmitButton;
