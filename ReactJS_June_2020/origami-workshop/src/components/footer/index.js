import React from "react";
import Link from "../link";
import imageLogo from "../../images/blue-origami-bird-flipped.png";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";

const Footer = () => {
  const links = getNavigation();

  return (
    <footer className={styles.footer}>
      <div>
        {links.map((navElement) => {
          return (
            <Link
              href={navElement.link}
              title={navElement.title}
              type="footer"
            />
          );
        })}
        <img src={imageLogo} />
      </div>
      <p>Sotfware University 2019</p>
    </footer>
  );
};

export default Footer;
