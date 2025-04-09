import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "dayjs/locale/id";
import { stylingConfig } from "../StylingConfig";

const CustomDatePicker = ({
  fontSize,
  padX,
  padY,
  fontWeight,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const style = stylingConfig[0];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
      <DatePicker
        open={open}
        onOpen={() => {
          setOpen(true);
          setIsFocused(true);
        }}
        onClose={() => setOpen(false)}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
          setIsFocused(false);
        }}
        inputFormat="DD/MM/YYYY"
        slotProps={{
          textField: {
            fullWidth: true,
            label: !isFocused && !selectedDate ? "Pilih Tanggal" : null,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            sx: {
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                boxShadow: "inset 1px 1px 8px rgba(0,0,0,0.1)",
                "& fieldset": {
                  borderColor: '#E0E0E0',
                },
                "&:hover fieldset": {
                  borderColor: '#E0E0E0',
                },
                "&.Mui-focused fieldset": {
                  borderColor: '#E0E0E0',
                  borderWidth: "2px",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: fontSize,
                color: style.primaryColor,
                fontWeight: fontWeight,
                fontFamily: style.fontFamily,
                paddingX: padX,
                paddingY: padY,
              },
              "& .MuiInputLabel-root": {
                fontSize: fontSize,
                color: style.primaryColor,
                fontWeight: fontWeight,
                fontFamily: style.fontFamily,
                top: "-8px",
              },
            },
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayIcon
                    onClick={() => {
                      setOpen(true);
                      setIsFocused(true);
                    }}
                    style={{ cursor: "pointer" }}
                    sx={{fontSize: fontSize}}
                  />
                </InputAdornment>
              ),
            },
          },
          popper: {
            placement: "bottom-end",
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: ["bottom", "top"],
                },
              },
            ],
            sx: {
              '& .MuiDateCalendar-root': {
                width: '250px',
                height: '320px'
              },
              '& .MuiPickersCalendarHeader-root': {
                paddingY: '0px', // Reduced vertical padding
                paddingX: '20px', // Increased horizontal padding
              },
              '& .MuiDayCalendar-root': {
                minWidth: '220px',
              },
              '& .MuiDayCalendar-weekContainer': {
                minWidth: '220px',
                paddingY: '0px', // Reduced vertical padding
                paddingX: '0px', // Slightly increased horizontal padding
              },
              '& .MuiPickersDay-root': {
                width: '32px',
                height: '32px',
                fontSize: '0.75rem'
              }
            }
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;