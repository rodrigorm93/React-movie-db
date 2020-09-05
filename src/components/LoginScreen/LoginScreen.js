import React from "react";

export const LoginScreen = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
