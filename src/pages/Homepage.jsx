import React from "react";
import styles from "./Homepage.module.css";
import Navbar from "../component/Homepage/Navbar";
import Testimonials from "../component/Homepage/Testimonials";
import Footer from "../component/Homepage/Footer";
import HomeContent from "../component/Homepage/HomeContent";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <HomeContent />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
