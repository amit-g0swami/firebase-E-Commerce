import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth-reducer";
import productsReducer from "./reducers/product-reducer";
import cartReducer from "./reducers/cart-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
