import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import api from "../../axios";

export const UserDetails = ({ user }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    api
      .get("/photos/1")
      .then((response) => {
        setAvatarUrl(response.data.url);
      })
      .catch((error) => {
        console.error("Error fetching dummy image:", error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      {avatarUrl && (
        <Avatar
          alt={user?.name}
          src={avatarUrl}
          sx={{ width: 80, height: 80 }}
        />
      )}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} style={{ marginLeft: "10px" }}>
          <Typography variant="p" gutterBottom>
            {user?.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user?.email}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
