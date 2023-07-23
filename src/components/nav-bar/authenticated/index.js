import DashboardButton from "../DashboardButton";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignoutUser } from "../../../redux/actions/auth-action";
import { navigationData } from "../../../config/config";

export const UserIsAuthenticated = ({ handleMenuClose }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div style={{ background: "white" }}>
      {Object.keys(navigationData).map((key) => (
        <MenuItem key={key} onClick={handleMenuClose}>
          <Link className="txt" to={navigationData[key]}>
            {key}
            {key === "cart" && cart?.length > 0 && (
              <span className="cart-length">{cart.length}</span>
            )}
          </Link>
        </MenuItem>
      ))}
      <DashboardButton handleMenuClose={handleMenuClose} />
      <MenuItem onClick={() => dispatch(SignoutUser())}>
        <Link className="txt" to="/login">
          Logout
        </Link>
      </MenuItem>
    </div>
  );
};
