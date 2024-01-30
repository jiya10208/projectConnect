import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useLogin } from "../../contexts/LoginContext";
import { FaHome } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { SiCodeproject } from "react-icons/si";
import { FcFaq } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";
import { TbLogin } from "react-icons/tb";

export default function Sidebar() {
  const { current_user } = useLogin();
  console.log(current_user);
  return (
    <div className={styles.Sidebar}>
      <h2>Project Connect</h2>
      <ul className={styles.ul}>
        <li>
          <FaHome />
          {"  "}
          <Link to={"/"}>Homepage</Link>
        </li>
        <li>
          <MdSpaceDashboard />
          {"  "}
          <Link to={current_user.length ? "/" : "/login"}>DashBoard</Link>
        </li>
        <li>
          <SiCodeproject />
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <FcAbout /> <Link to={"/"}>About</Link>
        </li>
        <li>
          <FcFaq /> <Link to={"/"}>FAQ's</Link>
        </li>
      </ul>
      {!current_user.length ? (
        <ul>
          <li>
            {" "}
            <TbLogin2 />
            <Link to={"/login"}>login</Link>
          </li>
          <li>
            {" "}
            <TbLogin />
            <Link to={"/signup"}>Signup</Link>
          </li>
        </ul>
      ) : (
        <div>
          <img src={current_user.image} alt="" />
          <p> Hi{current_user.name}</p>
        </div>
      )}
    </div>
  );
}
