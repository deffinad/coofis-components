import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { stylingConfig } from '../StylingConfig';

const style = stylingConfig[0]

const BoxStyle = (disabled = false, width = '100%', height = '', padX = 1, padY = 0.5, fontSize = '12px' ) => ({
    backgroundColor: disabled ? "#EDEDED" : "#FFFFFF",
    border: "1px solid #C2C2C2",
    borderRadius: "6px",
    minHeight: height,
    width: width,
    maxWidth: '100%',
    fontSize:  fontSize,
    boxShadow: disabled ? 'none' : "inset 1px 1px 8px rgba(0,0,0,0.1)",
    display: 'flex',
    fontFamily: style.fontFamily,
    fontWeight: '400',
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiInputBase-root': {
        padding: 0,
        paddingX: padX,
        paddingY: padY,
    },
    '& .MuiInputBase-input': {
        color: "#0A0A0A",
        fontSize: fontSize,
        textAlign: 'start',
        height: '100%',
        lineHeight: '1.5',
    },
    '& .MuiInputBase-input::placeholder': {
        color: disabled ? "#9E9E9E" : "#757575",
        opacity: 1,
    },
});

const CustomTextField = ({ disabled, placeholder, width, height, padX, padY, fontSize}) => {
    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            disabled={disabled}
            multiline
            sx={BoxStyle(disabled, width, height, padX, padY, fontSize)}
        />
    );
};

CustomTextField.propTypes = {
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    padX: PropTypes.number,
    padY: PropTypes.number,
    fontSize: PropTypes.string,
};

CustomTextField.defaultProps = {
    disabled: false,
    placeholder: '',
    width: '100%',
    height: '',
    padX: 1,
    padY: 0.5,
    fontSize:'12px',
};

export default CustomTextField;
