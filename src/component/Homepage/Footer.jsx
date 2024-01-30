import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <strong>Us</strong>
        </li>
        <li>Features</li>
        <li>Review</li>
        <li>Update</li>
      </ul>
      <ul>
        <li>
          <strong>Comapany</strong>
        </li>
        <li>About</li>
        <li>Contact us</li>
        <li>Blogs</li>
      </ul>
      <ul>
        <li>
          <strong>Support</strong>
        </li>
        <li>Help Centre</li>
        <li>ChatBot</li>
      </ul>
      <ul>
        <li>
          <strong>Follow us</strong>
        </li>
        <li>
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <FaLinkedin />
            LinkedIn
          </span>
        </li>
        <li>
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <FaGithub />
            Github
          </span>
        </li>
        <li>
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <FaTelegram />
            Telegram
          </span>
        </li>
        <li>
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <RiTwitterXFill /> X
          </span>
        </li>
      </ul>
    </div>
  );
}
