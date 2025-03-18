import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const LabelledCircularPercentage = ({ value, color }) => {
  const size = 110;

  return (
    <Box position="relative" display="inline-flex" width={size} height={size}>
      {/* Background Circle */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={{ color: "#eee" }}
      />
      {/* Progress Circle */}
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={4}
        style={{ transform: "rotate" }}
        sx={{
          color: color,
          position: "absolute",
          "& circle": { strokeLinecap: "round" },
        }}
      />
      {/* Percentage Text */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1" fontWeight="bold" color="#616161">
          {`${(value.toLocaleString("id-ID"))}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default LabelledCircularPercentage