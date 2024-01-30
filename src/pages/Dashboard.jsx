import React from "react";
import styles from "./Dashboard.module.css";
import { useLogin } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const { current_user } = useLogin();
  if (current_user.length === 0) {
    navigate("/login");
  }
  return <div className={styles.main}></div>;
}
