import React from "react";
import Link from "../link";
import imageLogo from "../../images/blue-origami-bird-flipped.png";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="#" title="Going to 1" type="footer" />
        <Link href="#" title="Going to 2" type="footer" />
        <Link href="#" title="Going to 3" type="footer" />
        <Link href="#" title="Going to 4" type="footer" />
        <Link href="#" title="Going to 5" type="footer" />
        <Link href="#" title="Going to 6" type="footer" />
        <Link href="#" title="Going to 7" type="footer" />
        <Link href="#" title="Going to 8" type="footer" />
        <Link href="#" title="Going to 9" type="footer" />
        <Link href="#" title="Going to 10" type="footer" />
        <Link href="#" title="Going to 11" type="footer" />
        <img src={imageLogo} />
      </div>
      <p>Sotfware University 2019</p>
    </footer>
  );
};

export default Footer;
