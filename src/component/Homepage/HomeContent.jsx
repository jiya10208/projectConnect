import React from "react";
import styles from "./HomeContent.module.css";
// import ;]
import img from "../../assets/pngwing.com.png";
export default function HomeContent() {
  return (
    <div className={styles.all_content}>
      <p>
        <strong>Welcome to Project conneect </strong>
        <em>Where collaboraion begins </em>
        <p>
          —meticulously crafted platform where people of different tech stack
          are there to help you with a wealth of learning resources, and
          enjoyable projects to empower your technical journey
        </p>
      </p>
      <div className={styles.image}>
        <img src={img} alt="us" />
      </div>
    </div>
  );
}
