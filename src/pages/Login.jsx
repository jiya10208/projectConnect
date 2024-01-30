import React, { useEffect, useState } from "react";
import { useLogin } from "../contexts/LoginContext";
import { Link, useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";

export default function Login() {
  const { getCurrUser, error, current_user } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, [error, current_user, navigate, getCurrUser]);
  async function handleLogin(e) {
    setMessage("");
    e.preventDefault();
    if (!password || !email) {
      setMessage((message) => (message = "please fill all the details."));
      return;
    }
    const newUser = { id: email, password };
    await getCurrUser(newUser);

    if (!current_user.name) {
      setMessage("Invalid login data.");
      setMessage((mess) => (mess = error));

      setEmail((email) => (email = ""));
      setPassword((pass) => (pass = ""));
      return;
    } else if (current_user && !error) {
      setMessage("navigating you to the dashboard");
      navigate("/");
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login page</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button onClick={handleLogin}> submit</button>
        <p>
          {message ? <p className={styles.message}>{message}</p> : <p></p>}
          No account? <Link to={"/signup"}> create account</Link>
        </p>
      </form>
    </div>
  );
}
