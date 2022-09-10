import React, { useState, useEffect } from "react";
import AuthService from "../services/auth";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getEmailData = (e) => {
    setEmail(e.target.value);
  };
  const getPasswordData = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    AuthService.login(email, password)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const googleLoginHandler = async (res) => {
    const user = jwtDecode(res.credential);
    console.log(user);
    AuthService.googleLogin(user.name, user.email)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_API_KEY,
      callback: googleLoginHandler,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("googleLogin"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  return (
    <div className="login">
      <div className="login_box">
        <p>Login to your account</p>
        <hr />
        <div className="email">
          <label htmlFor="email">Email:&nbsp;</label>
          <input type="email" id="email" onChange={getEmailData} />
        </div>
        <div className="password">
          <label htmlFor="password">Password:&nbsp;</label>
          <input type="password" id="password" onChange={getPasswordData} />
        </div>
        <div className="button_box">
          <button className="localLogin" onClick={loginHandler}>
            Local login
          </button>
          <p>...or you can log in with your Google account:</p>
          <div id="googleLogin"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
