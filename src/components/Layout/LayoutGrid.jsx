import React from "react";
import Grid from "@mui/material/Grid";

const LayoutGrid = ({ children, style, onClick, size }) => {
  return (
    <>
      {/* <Grid container spacing={2} minHeight={"100px"} flex={1}>
        <Grid
          item
          xs={size}
          sx={{ border: "1px solid black", ...style }}
          onClick={onClick}
        >
          {children}
        </Grid>
      </Grid> */}

      <Grid item xs={size}>
        <Grid sx={{ border: "1px solid black", ...style }} onClick={onClick}>
          xs=8
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutGrid;
