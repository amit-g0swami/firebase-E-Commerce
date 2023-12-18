import { authActionTypes } from "../types";

const initialState = {
  isAuthenticated: false,
  user: {},
  shippingAddress: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case authActionTypes.SIGNOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    case authActionTypes.SIGNIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case authActionTypes.SET_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
