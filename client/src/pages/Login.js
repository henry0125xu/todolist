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
          console.log("Login succeed~");
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
          console.log("Login succeed~");
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "816843187817-iephlb863mgjrtdrdjtsca80p15q4eju.apps.googleusercontent.com",
      callback: googleLoginHandler,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("googleLogin"),
      {
        theme: "filled_black",
        size: "medium",
        text: "signin",
        locale: "en",
      }
    );
  }, []);

  return (
    <div className="login">
      <div className="email">
        <label htmlFor="email">Email:&nbsp;</label>
        <input type="email" id="email" onChange={getEmailData} />
      </div>
      <div className="password">
        <label htmlFor="password">Password:&nbsp;</label>
        <input type="password" id="password" onChange={getPasswordData} />
      </div>
      <button onClick={loginHandler}>Login</button>
      <div id="googleLogin"></div>
    </div>
  );
};

export default Login;
