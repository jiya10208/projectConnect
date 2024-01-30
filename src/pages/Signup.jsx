import React, { useState } from "react";
import { useLogin } from "../contexts/LoginContext";
import { Link, useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";

export default function SignUp() {
  const navigate = useNavigate();
  const { createUser, error } = useLogin();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function HandleSubmition(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("passwords are not same, please try again");
      return;
    }
    if (!name || !email) {
      setMessage("please fill all the fields");
      return;
    }
    const newUser = {
      name,
      id: email,
      password,
    };
    await createUser(newUser);
    if (error) setMessage(error);

    setMessage("we will move you to login page, please verify yourself first");
    setTimeout(() => {
      setMessage("");
      setEmail("");
      setName("");
      navigate("/login");
    }, 5000);
  }
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Sign Up page</h1>
        <label htmlFor="name"></label>
        <input
          type="text"
          name=""
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name..."
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email.."
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="create new password .."
        />
        <label htmlFor="confirm_password"></label>{" "}
        <input
          type="password"
          id="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password .."
        />
        <button onClick={HandleSubmition}>Submit</button>
        {message ? <p>{message}</p> : <p></p>}
        <p>
          {" "}
          already have an accound<Link to={"/login"}> Login Now</Link>
        </p>
      </form>
    </div>
  );
}
