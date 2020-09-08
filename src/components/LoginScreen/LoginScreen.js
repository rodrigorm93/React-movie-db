import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  //history: componente que entrena router

  const handleLogin = () => {
    // console.log("Login");
    // history.push("/"); //para redirecionar a un componente
    dispatch({
      // disparamos la accion
      type: types.login,
      payload: {
        name: "Rodrigo",
      },
    });
    history.replace("/");
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
