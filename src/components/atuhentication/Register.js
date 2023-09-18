import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import Style from "./Login.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={Style.registerContainer}>
      <div className={Style.loginBox}>
        <h1 className={Style.tittle}>Instagram</h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={Style.loginInput}
          placeholder="Email"
          type="text"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={Style.loginInput}
          placeholder="Username"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={Style.loginInput}
          placeholder="Password"
          type="password"
        />

        <button onClick={handleSignUp} className={Style.loginBtn} type="submit">
          Sign up
        </button>
      </div>
      <div className={Style.qBox}>
        <h4 className={Style.signupText}>
          Have an account?{" "}
          <Link
            style={{ color: "rgb(95, 125, 242)", textDecoration: "none" }}
            to={"/login"}
          >
            {" "}
            Login
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
