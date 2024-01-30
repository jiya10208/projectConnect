import { useNavigate } from "react-router-dom";
import styles from "./404.module.css";
import { useEffect, useState } from "react";

export default function PageNotFound() {
  const [duration, setDuration] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    function timeCount() {
      if (duration === 0) return navigate("/");

      setTimeout(() => {
        setDuration((prevDuration) => prevDuration - 1);
      }, 1000);
    }
    timeCount();
  }, [duration]);

  function HandleHomepage() {
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <p>Page Not Found</p>
      <div className={styles.img}>
        <img src="./../../public/404.png" alt="" />
      </div>
      <div className={styles.timer}>{duration}</div>
      <button className={styles.btn} onClick={HandleHomepage}>
        Get Back to Homepage
      </button>
    </div>
  );
}
