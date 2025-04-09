import React, { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
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
    width = '100%', // default responsive
    minWidth = 150  // pastikan cukup agar teks tidak terpotong
}) => {
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
            popupIcon={<ExpandMoreIcon />}
            disableClearable={disableClear}
            fullWidth
            sx={{
                width,
                minWidth, // <<< penting agar tidak terpotong
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    multiline={false}
                    placeholder={placeholder}
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            fontSize,
                            border: "1px solid #ccc",
                            paddingY: padY,
                            paddingX: padX,
                            borderRadius: "8px",
                            whiteSpace: "nowrap",     // satu baris
                            overflow: "hidden",
                            textOverflow: "ellipsis", // potong jika kepanjangan
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
                        whiteSpace: 'nowrap' // tetap satu baris
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
