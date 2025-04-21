import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({id,  name,  label,  value,  tipe,  placeholder,  onChange,onClick,}) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      variant="outlined"
      value={value}
      type={tipe}
      placeholder={placeholder}
      fullWidth
    />
  );
};

Input.defaultProps = {
  type: "text",
  onChange: () => {},
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  sx: PropTypes.any,
};

export default Input;
