import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({
  isAuthenticate, //saber si esta autenticaado
  component: Component, //el compoenente que la persona quiere renderizar
  ...rest // resto de los elementos, el exact, path etc
}) => {
  //si esta utenticado tiene acceso al componente y mada todo sino lo redirecciona al login
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticate ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.prototype = {
  isAuthenticate: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
