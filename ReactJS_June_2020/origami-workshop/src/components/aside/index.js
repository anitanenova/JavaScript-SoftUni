import React from "react";
import LinkComponent from "../link/index";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";

const Aside = () => {
  const links = getNavigation();

  return (
    <aside className={styles.container}>
      {links.map((navElement) => {
        return (
          <LinkComponent
            key={navElement.title}
            href={navElement.link}
            title={navElement.title}
            type="aside"
          />
        );
      })}
    </aside>
  );
};

export default Aside;
