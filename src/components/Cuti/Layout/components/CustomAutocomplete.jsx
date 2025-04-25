import React, { useState, useRef, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Autocomplete, TextField } from '@mui/material'
import { scrollbar } from '../utils/scrollbar'

const CustomAutocomplete = ({
    id,
    opsi,
    placeholder,
    fontSize = '1rem',
    padX = 2.5,
    padY = 0,
    disableClear = true,
    minWidth = 100,
    multiline = false
}) => {
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)
    const [inputWidth, setInputWidth] = useState('auto')
    const textRef = useRef(null)

    // Calculate width based on text content
    useEffect(() => {
        if (textRef.current) {
            const textLength = value ? value.length : placeholder ? placeholder.length : 0;
            // Base width calculation on character count
            // You may need to adjust these values based on your font
            const charWidth = parseInt(fontSize) * 0.7;
            const calculatedWidth = Math.max(
                minWidth, 
                (textLength * charWidth) + (padX * 2) + 48 // 48px for icon and padding
            );
            setInputWidth(`${calculatedWidth}px`);
        }
    }, [value, placeholder, fontSize, padX, minWidth]);

    return (
        <Autocomplete
            key={id}
            options={opsi || []}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            noOptionsText="Tidak ada pilihan"
            popupIcon={<ExpandMoreIcon />}
            disableClearable={disableClear}
            fullWidth={false}
            sx={{
                width: inputWidth,
                minWidth: `${minWidth}px`,
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    inputRef={textRef}
                    multiline={multiline}
                    placeholder={placeholder}
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            fontSize,
                            border: "1px solid #ccc",
                            paddingY: `${padY}px !important`,
                            paddingX: padX,
                            borderRadius: "8px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            boxShadow: placeholder === 'Pilih Jenis Cuti'
                                ? '2px 4px 8px rgba(0,0,0,0.1)'
                                : 'inset 2px 4px 8px rgba(0,0,0,0.1)',
                            "&:hover": {
                                border: "1px solid #888",
                            },
                            "&.Mui-focused": {
                                border: "1px solid #ccc",
                                boxShadow: placeholder === 'Pilih Jenis Cuti'
                                    ? '2px 4px 8px rgba(0,0,0,0.1)'
                                    : 'inset 2px 4px 8px rgba(0,0,0,0.1)',
                            }
                        },
                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                />
            )}
            slotProps={{
                paper: {
                    sx: {
                        ...scrollbar('#E0E0E0'),
                        border: "1px solid #ccc",
                        boxShadow: "2px 4px 10px rgba(0,0,0,0.15)",
                        borderRadius: "8px",
                        fontSize,
                        whiteSpace: 'nowrap'
                    }
                },
                listbox: {
                    sx: {
                        ...scrollbar('#E0E0E0'),
                        fontSize,
                        whiteSpace: 'nowrap',
                        "& .MuiAutocomplete-option": {
                            borderBottom: "1px solid #ddd",
                            paddingX: 3,
                            "&:last-child": {
                                borderBottom: "none"
                            }
                        }
                    }
                }
            }}
        />
    )
}

export default CustomAutocomplete