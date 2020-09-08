import { types } from "../../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true, // si pasa la autentificacion
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
