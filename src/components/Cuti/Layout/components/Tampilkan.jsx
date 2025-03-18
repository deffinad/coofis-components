import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { MenuItem, FormControl, Select, Typography, Box } from "@mui/material";

const DropdownTampilkan = ({ value }) => {
  const [selectedValue, setSelectedValue] = React.useState(1);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Typography fontFamily="Nunito Sans" fontWeight="600" color="black" variant="body1">
        Tampilkan
      </Typography>
      <FormControl size="small" variant="outlined" sx={{boxShadow: 'inset 2.5px 2.5px 6px rgba(0, 0, 0, 0.17)', borderRadius: '8px'}}>
        <Select
          value={selectedValue}
          onChange={handleChange}
          sx={{
            minWidth: 70,
            borderRadius: "8px",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
          }}
          IconComponent={ExpandMore}
        >
          {[...Array(value)].map((_, index) => (
            <MenuItem key={index + 1} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownTampilkan;
