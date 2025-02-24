import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Ratings = ({ value }) => {
  const [tempValue, setTempValue] = useState(2);

  useEffect(() => {
    if (value) {
      setTempValue(value);
    }
  }, [value]);

  return (
    <>
      <div>🚀 Rating 🚀</div>
      <Rating
        name="simple-controlled"
        value={tempValue}
        onChange={(event, newValue) => {
          setTempValue(newValue);
        }}
      />
    </>
  );
};

Ratings.propTypes = {
  value: PropTypes.number,
};

export default Ratings;
