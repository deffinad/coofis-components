import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const Navbar = ({ menuItems }) => {
  console.log(menuItems)
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Menu Icon (Untuk Mobile View) */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon />
        </IconButton>

        {/* Logo atau Judul */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>

        {/* Menu Navigasi */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Rating</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  sx: PropTypes.any
};

export default Navbar;
