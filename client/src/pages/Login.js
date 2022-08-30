import React from "react";

const Login = () => {
  const loginHandler = () => {};

  return (
    <div className="login">
      <div className="email">
        <label htmlFor="email">Email:&nbsp;</label>
        <input type="email" id="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Password:&nbsp;</label>
        <input type="password" id="password" />
      </div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
