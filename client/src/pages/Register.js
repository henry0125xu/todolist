import React from "react";

const Register = () => {
  const registerHandler = () => {};

  return (
    <div className="register">
      <div className="username">
        <label htmlFor="username">User Name:&nbsp;</label>
        <input type="text" id="username" />
      </div>
      <div className="email">
        <label htmlFor="email">Email:&nbsp;</label>
        <input type="email" id="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Password:&nbsp;</label>
        <input type="password" id="password" />
      </div>
      <button onClick={registerHandler}>Register</button>
    </div>
  );
};

export default Register;
