import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = ({ title ,height, backgroundColor, textColor }) => {
  return (
    <AppBar
      position={"static"}
      elevation={0}
      sx={{
        backgroundColor,
        height,
        borderBottom: "2px solid #f0f0f0",
        boxShadow: "none",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ height: "100%", px: 4 }}>
        {/* Ganti seluruh Box menuItems dengan elemen statis */}
        <Typography
          variant="h6"
          component="div"
          sx={{ color: textColor, flexGrow: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

// PropTypes sudah benar
Navbar.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

// defaultProps sudah benar
Navbar.defaultProps = {
  title: "My Website",
  height: 65,
  backgroundColor: "#ffffff",
  textColor: "#333333",
};

export default Navbar;
