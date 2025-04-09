import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid2 } from '@mui/material';
import PropTypes from 'prop-types';
import { stylingConfig } from '../StylingConfig';
import InputAdornment from '@mui/material/InputAdornment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const style = stylingConfig[0]

const BoxStyle = (disabled = false, width = '100%', height = '', padX = 1, padY = 0.5, fontSize = '12px') => ({
    backgroundColor: disabled ? "#EDEDED" : "#FFFFFF",
    border: "1px solid #C2C2C2",
    borderRadius: "6px",
    minHeight: height,
    width: width,
    maxWidth: '100%',
    fontSize: fontSize,
    boxShadow: disabled ? 'none' : "inset 1px 1px 4px rgba(0,0,0,0.1)",
    display: 'flex',
    fontFamily: style.fontFamily,
    fontWeight: '400',
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiInputBase-root': {
        padding: 0,
        paddingLeft: padX,
        paddingRight: padX,
        paddingTop: padY,
        paddingBottom: padY,
        boxSizing: 'border-box',
    },
    '& .MuiInputBase-input': {
        color: "#757575",
        fontSize: fontSize,
        textAlign: 'start',
        height: '100%',
        lineHeight: '1.5',
        width: '100%',
    },
    '& input': {
        paddingTop: padY,
        paddingBottom: padY,
        paddingLeft: padX,
        paddingRight: padX,
        boxSizing: 'border-box',
    },
    '& .MuiInputBase-input::placeholder': {
        color: disabled ? "#9E9E9E" : "#757575",
        opacity: 1,
    },
    '& .MuiInputBase-input::-webkit-outer-spin-button, & .MuiInputBase-input::-webkit-inner-spin-button': {
        display: 'none',
    },
});

const CustomTextField = ({ disabled, placeholder, width, height, padX, padY, fontSize, numberOnly, multiline }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (numberOnly && isNaN(newValue)) return;
        setValue(newValue);
    };

    const increaseValue = () => {
        setValue((prev) => (prev === '' ? 1 : Number(prev) + 1));
    };

    const decreaseValue = () => {
        setValue((prev) => (prev > 0 ? Number(prev) - 1 : 0));
    };

    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            disabled={disabled}
            multiline={!numberOnly || multiline}
            onChange={handleChange}
            value={value}
            width={width}
            type={numberOnly ? "number" : "text"}
            sx={BoxStyle(disabled, width, height, padX, padY, fontSize)}
            slotProps={{
                input: {
                    endAdornment: numberOnly && (
                        <InputAdornment position="end" sx={{mr: 1}}>
                            <Grid2 container direction="column" alignItems="center">
                                <ExpandLessIcon fontSize="small" onClick={increaseValue} style={{ cursor: 'pointer', fontSize: '14px', padding: 0}}/>
                                <ExpandMoreIcon fontSize="small" onClick={decreaseValue} style={{ cursor: 'pointer', fontSize: '14px', padding: 0}}/>
                            </Grid2>
                        </InputAdornment>
                    ),
                },
            }}
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
    numberOnly: PropTypes.bool,
};

CustomTextField.defaultProps = {
    disabled: false,
    placeholder: '',
    width: '100%',
    height: '',
    padX: 1,
    padY: 0.5,
    fontSize:'12px',
    numberOnly: false,
};

export default CustomTextField;