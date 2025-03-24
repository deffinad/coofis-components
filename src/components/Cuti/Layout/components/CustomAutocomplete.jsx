import React from 'react'
import { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Autocomplete, TextField } from '@mui/material'

const CustomAutocomplete = ({id, opsi, placeholder}) => {
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)

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
        popupIcon={close ? <ExpandMoreIcon /> : <ExpandLessIcon />} 
        fullWidth
        renderInput={(params) => (
            <TextField 
                {...params} 
                multiline
                placeholder={placeholder}
                variant="outlined" 
                sx={{ 
                    "& .MuiOutlinedInput-root": {
                        border: "1px solid #ccc",
                        padding: 0,
                        paddingX: 2.5,
                        borderRadius: "8px",
                        boxShadow: placeholder === 'Pilih Jenis Cuti' ? '2px 4px 8px rgba(0,0,0,0.1)' : 'inset 2px 4px 8px rgba(0,0,0,0.1)',
                        "&:hover": {
                            border: "1px solid #888",
                        },
                        "&.Mui-focused": {
                            border: "1px solid #ccc",
                            boxShadow: placeholder === 'Pilih Jenis Cuti' ? '2px 4px 8px rgba(0,0,0,0.1)' : 'inset 2px 4px 8px rgba(0,0,0,0.1)',
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
                    border: "1px solid #ccc",
                    boxShadow: "2px 4px 10px rgba(0,0,0,0.15)",
                    borderRadius: "8px",
                }
            },
            listbox: {
                sx: {
                    "& .MuiAutocomplete-option": {
                        borderBottom: "1px solid #ddd",
                        paddingX:3  ,
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