import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserIsAuthenticated } from "./authenticated";
import { UserNotAuthenticated } from "./not-authenticated";
import { useState } from "react";

export const Navigation = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "white", boxShadow: "none" }}>
      <Toolbar>
        <div className="row" style={{ width: "100%" }}>
          <Link className="txt" to="/">
            <img
              src="https://cdn.cdnlogo.com/logos/r/29/react-native-firebase.svg"
              alt=""
              className="logo"
            />
          </Link>
          <IconButton
            size="large"
            edge="end"
            aria-label="show more"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <MoreVertIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {isAuthenticated === true ? (
            <UserIsAuthenticated handleMenuClose={handleMenuClose} />
          ) : (
            <UserNotAuthenticated handleMenuClose={handleMenuClose} />
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
