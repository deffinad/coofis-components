import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
} from "@mui/material";

const BoxStyle = ({ backColor = '#3366FF', border = 'none', color = 'white' } = {}) => ({
  cursor: 'pointer',
  border: border,
  backgroundColor: backColor,
  color: color,
  padding: "4px 12px", // Mengurangi padding untuk mengecilkan tinggi
  borderRadius: "6px",
  textAlign: "center",
  fontWeight: "500",
  fontSize: "14px",
  fontFamily: "Nunito Sans",
  "&:hover": {
    opacity: 0.9,
  },
});

const CustomDialog = ({ open, onClose, title, text, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={false} slotProps={{
        paper: {
          sx: {
            maxWidth: '24%',
            width: '100%',
            borderRadius: '5px'
          },
        },
      }}>
      <DialogTitle sx={{ fontFamily: 'Nunito Sans', fontSize: '20px', fontWeight: '400'}}>{title}</DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Typography sx={{ color:'#616161', fontFamily: 'Nunito Sans', fontSize: '16px', fontWeight: '400'}}>{text}</Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor:'#F5F5F5', padding: "8px" }}> {/* Mengurangi padding untuk mengecilkan tinggi */}
        <Box 
          onClick={onClose} 
          sx={BoxStyle({ backColor: "white", border: "1px solid #E0E0E0", color: "black" })}
        >
          Batal
        </Box>
        <Box 
          onClick={onConfirm} 
          sx={BoxStyle()}
        >
          Konfirmasi
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
