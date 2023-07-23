const initialState = {
  isAuthenticated: false,
  user: {},
  shippingAddress: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "SIGNOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    case "SIGNIN_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "SET_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
