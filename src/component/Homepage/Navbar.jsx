import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>Project Connect</ul>
      <ul>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>About</li>
        <li>FAQ's</li>
      </ul>
      <ul>
        <li>
          <Link to={"/signup"}>Sign Up</Link>
        </li>
        <li>
          <Link to={"/login"}>Login In</Link>
        </li>
      </ul>
    </nav>
  );
}
