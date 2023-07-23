import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export const UserNotAuthenticated = ({ handleMenuClose }) => {
  return (
    <div style={{ background: "white" }}>
      <MenuItem onClick={handleMenuClose}>
        <Link className="txt" to="/login">
          Login
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="txt" to="/register">
          Register
        </Link>
      </MenuItem>
    </div>
  );
};
