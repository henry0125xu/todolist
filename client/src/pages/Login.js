import React, { useState } from "react";
import AuthService from "../services/auth";
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
          localStorage.setItem("user", JSON.stringify(res.data));
          alert("Login succeed~");
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

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
    </div>
  );
};

export default Login;
