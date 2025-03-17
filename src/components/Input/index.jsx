import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({ id, name, label, value, type, onChange, onClick, sx, ...props }) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      variant="outlined"
      value={value}
      type={type}
      onChange={onChange}
      onClick={onClick}
      sx={sx} 
      {...props}
    />
  );
};



Input.defaultProps = {
  type: "text",
  onChange: () => {}
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  sx: PropTypes.any
};

export default Input;
