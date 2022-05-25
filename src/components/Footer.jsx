import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <AppBar position="static" sx={{ mb: "10px" }}>
        <Toolbar sx={{ mr: "auto", ml: "auto" }}>
          <Typography variant="h6" component="span" sx={{ flexGrow: 5 }}>
            Copyright © 2022
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
