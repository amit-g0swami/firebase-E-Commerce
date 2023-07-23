import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#f8f8f8",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <Typography variant="body2">
        React E-commerce @2023 all rights reserved
      </Typography>
    </Box>
  );
};
