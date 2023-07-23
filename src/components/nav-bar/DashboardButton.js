import MenuItem from "@mui/material/MenuItem";
import { withAdminOnly } from "../../utils/withAdminOnly";
import { Link } from "react-router-dom";

const DashboardButton = ({ handleMenuClose }) => {
  return (
    <MenuItem onClick={handleMenuClose}>
      <Link className="txt" to="/admin">
        Dashboard
      </Link>
    </MenuItem>
  );
};

export default withAdminOnly(DashboardButton);
