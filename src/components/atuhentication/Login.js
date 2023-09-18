import React from "react";
import Style from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className={Style.loginContainer}>
      <form className={Style.loginBox} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={Style.tittle}>Instagram</h1>
        <input
          className={Style.loginInput}
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={Style.loginInput}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={Style.loginBtn}>
          Log in
        </button>
      </form>
      <div className={Style.qBox}>
        <h4 className={Style.signupText}>
          Don't have an account?{" "}
          <Link
            style={{ color: "rgb(95, 125, 242)", textDecoration: "none" }}
            to={"/register"}
          >
            {" "}
            SignUp
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
