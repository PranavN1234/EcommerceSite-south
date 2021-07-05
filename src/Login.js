import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //FireBase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //Fire base register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.ammapickles.ca/uploads/b/0ab8e2b62e07a0c94ab832c3d2875187bb7dbf0dad43036bc7270178e5c6daab/Copy%20of%20Copy%20of%20Black%20and%20White%20Modern%20Framed%20Lola%20Cafe%20Logo%20(14)_1596580603.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__Signinbutton"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>

        <p>
          By signing in you agree to the terms and conditions of Amma's pickles
          terms and service
        </p>

        <button onClick={register} className="login__Registerbutton">
          Create Pickles Account
        </button>
      </div>
    </div>
  );
}

export default Login;
