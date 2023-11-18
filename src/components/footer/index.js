import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useFooterStore from "./store/footer.store";
import { useGetFooterString } from "./hooks/useGetFooterString";

export const Footer = () => {
  const { isLoading, isError } = useGetFooterString();
  const footerString = useFooterStore((state) => state.footerString);

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
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        {isLoading && "Loading..."}
        {isError && "Error..."}
        {footerString}
      </Typography>
    </Box>
  );
};
