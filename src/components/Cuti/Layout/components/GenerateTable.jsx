import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Pagination,
  Box,
  Typography
} from "@mui/material";
import * as MUIIcons from '@mui/icons-material'
import { stylingConfig } from "../StylingConfig";
import { useNavigate, useLocation } from "react-router-dom";
import CustomToolTip from "./CustomToolTip";
import CustomDialog from "./DialogBox";

const style = stylingConfig[0];
const FONT_SIZE = "12px";
const FONT_WEIGHT = "400";

const tableStyle = (color = style.primaryColor, weight = FONT_WEIGHT, bgColor = "transparent") => ({
  fontSize: FONT_SIZE,
  color: color,
  fontWeight: weight,
  textAlign: "center",
  fontFamily: style.fontFamily,
  backgroundColor: bgColor,
  padding: "10px",
});

const statusStyle = {
  Selesai: { color: "white", background: "#52BD94" },
  Disetujui: { color: "white", background: "#52BD94" },
  Ditangguhkan: { color: "white", background: "#FFB020" },
  Diproses: { color: "white", background: "#FFB020" },
  Ditolak: { color: "white", background: "#CB3A31" },
  Batal: { color: "white", background: "#CB3A31" },
};

const GenerateTable = ({ config }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setDialogOpen(true);
  };

  const headers = config.find(item => item.type === 'tableHeader')?.children || [];
  const tableData = config.find(item => item.type === 'tableCell') || {};
  const rows = tableData.children || [];
  const showPagination = tableData.pagination === 1;
  const navigate = useNavigate();
  const location = useLocation();

  const columns = headers.map(header => ({
    label: header.title,
    field: header.field,
  }));

  return (
    <Stack spacing={2}>
      {/* Table */}
      <TableContainer component={Paper} sx={{ border: "1px solid #ddd", borderRadius: 2 }}>
        <Table>
          {/* HEADER */}
          <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell key={index} sx={{...tableStyle(style.blackColor, "700"), fontSize:FONT_SIZE}}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <TableCell
                    key={colIndex}
                    sx={{
                      textAlign: Array.isArray(row[col.field]) ? "left" : "center",
                      fontSize: FONT_SIZE, // Gunakan konstanta
                      fontWeight: FONT_WEIGHT, // Gunakan konstanta
                      fontFamily: style.fontFamily,
                      ...(
                        col.field === "tipeDokumen" || col.field === "tipe"
                          ? tableStyle(
                              row[col.field] === "Pengajuan Cuti" ? "#317159" : "#A40917",
                              "",
                              row[col.field] === "Pengajuan Cuti" ? "#F5FBF8" : "#FDF7F7"
                            )
                          : col.field === "status"
                          ? tableStyle()
                          : tableStyle()
                      ),
                    }}
                  >
                    {col.field === "status" ? (
                      <Box
                        sx={{
                          backgroundColor: statusStyle[row[col.field]]?.background || style.primaryColor,
                          color: statusStyle[row[col.field]]?.color || "#FFF",
                          fontSize: "11px",
                          fontWeight: "600",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          display: "inline-block",
                          textAlign: "center",
                          width: "fit-content",
                          fontFamily: style.fontFamily,
                        }}
                      >
                        {row[col.field]}
                      </Box>
                    ) : col.field === "tindakan" ? (
                      // Tidak mengubah font untuk tindakan
                      row[col.field] === "1" ? (
                        <CustomToolTip placeholder={'Lihat'}>
                          <MUIIcons.RemoveRedEyeOutlined sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer" }} />
                        </CustomToolTip>
                      ) : row[col.field] === "2" ? (
                        <Stack direction={'row'} justifyContent={'center'}>
                          <CustomToolTip placeholder={'Ubah'}>
                            <MUIIcons.CreateOutlined sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer", marginRight: "4px" }} />
                          </CustomToolTip>
                          <CustomToolTip placeholder={'Hapus'}>
                          <MUIIcons.DeleteOutline
                            sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                            onClick={() => handleDeleteClick(row)}/>
                          </CustomToolTip>
                        </Stack>
                      ) : row[col.field] === "3" ? (
                        <Stack direction={'row'} justifyContent={'center'} spacing={2}>
                          <CustomToolTip placeholder={'Lihat'}>
                            <MUIIcons.RemoveRedEyeOutlined sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer" }} />
                          </CustomToolTip>
                          <CustomToolTip placeholder={'Batalkan'}>
                          <MUIIcons.Close
                            sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                            onClick={() => handleDeleteClick(row)}/>
                          </CustomToolTip>
                        </Stack>
                      ) : row[col.field] === "4" ? (
                        <Box
                          sx={{
                            backgroundColor: "#FFB020",
                            color: "#FFF",
                            fontWeight: "600",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            display: "inline-flex",
                            alignItems: "center",
                            cursor: "pointer",
                            width: "fit-content",
                            fontFamily: style.fontFamily,
                          }}
                          // onClick={() => navigate(`${location.pathname}/detaildokumen`, { state: { detailData: row } })}
                          onClick={() => navigate(`${location.pathname}/detaildokumen`)}
                        >
                          <MUIIcons.CreateOutlined sx={{ fontSize: "14px", color: "#FFF", marginRight: "4px" }} />
                          <Typography fontSize="11px" fontFamily={style.fontFamily}>
                            Periksa
                          </Typography>
                        </Box>
                      ) : (
                        "-"
                      )
                    ) : Array.isArray(row[col.field]) ? (
                      <Box sx={{ textAlign: "left", fontFamily: style.fontFamily }}>
                        {row[col.field].map((item, index) => (
                          <Typography key={index} fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT} fontFamily={style.fontFamily}>
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    ) : (
                      <Typography fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT} fontFamily={style.fontFamily}>
                        {row[col.field]}
                      </Typography>
                    )}
                  </TableCell>
                  
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} sx={tableStyle("#9E9E9E", "800", "#EDEDED")}>
                  <Typography fontFamily= {style.fontFamily} fontWeight={800} fontSize={14}>Data tidak tersedia</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {showPagination && (
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: "100%", paddingTop: "10px" }}>
          <Typography fontFamily={style.fontFamily} color='black' fontSize={14}>Menampilkan 1 sampai 1 entri</Typography>
          <Pagination count={2} color={style.primaryColor} sx ={{"& .MuiPaginationItem-root:focus": {outline: "none", boxShadow: "none" }}}/>
        </Stack>
      )}
      <CustomDialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      title="Hapus Dokumen"
      text={selectedRow?.dialogTeks}
      onConfirm={() => {
        setDialogOpen(false);
      }}
    />
    </Stack>
  );
};

export default GenerateTable;
