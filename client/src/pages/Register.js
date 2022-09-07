import React, { useState } from "react";
import AuthService from "../services/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const getUsernameData = (e) => {
    setUsername(e.target.value);
  };
  const getEmailData = (e) => {
    setEmail(e.target.value);
  };
  const getPasswordData = (e) => {
    setPassword(e.target.value);
  };
  const registerHandler = () => {
    AuthService.register(username, email, password)
      .then(() => {
        alert("Registration succeeds~");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <div className="register">
      <div className="reg_box">
        <p>Register your account</p>
        <hr></hr>
        <div className="username">
          <label htmlFor="username">User Name:&nbsp;</label>
          <input
            type="text"
            id="username"
            onChange={getUsernameData}
            autocomplete="off"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="email"
            id="email"
            onChange={getEmailData}
            autocomplete="off"
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:&nbsp;</label>
          <input
            type="password"
            id="password"
            onChange={getPasswordData}
            autocomplete="off"
          />
        </div>
        <button onClick={registerHandler}>Register</button>
      </div>
    </div>
  );
};

export default Register;
