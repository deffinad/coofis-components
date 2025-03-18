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
  Pending: { color: "white", background: "#FFB020" },
  Diproses: { color: "white", background: "#FFB020" },
  Ditolak: { color: "white", background: "#CB3A31" },
  Batal: { color: "white", background: "#CB3A31" },
};

const GenerateTable = ({ config }) => {
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
                <TableCell key={index} sx={{...tableStyle("#0A0A0A", "700"), fontSize:FONT_SIZE}}>
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
                        <MUIIcons.RemoveRedEyeOutlined sx={{ fontSize: "22px", color: "#3366FF", cursor: "pointer" }} />
                      ) : row[col.field] === "2" ? (
                        <>
                          <MUIIcons.CreateOutlined sx={{ fontSize: "22px", color: "#3366FF", cursor: "pointer", marginRight: "4px" }} />
                          <MUIIcons.RemoveRedEyeOutlined sx={{ fontSize: "22px", color: "#3366FF", cursor: "pointer" }} />
                        </>
                      ) : row[col.field] === "3" ? (
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
                <TableCell colSpan={columns.length} sx={tableStyle("#999", "400", "center")}>
                  Tidak ada data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {showPagination && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", paddingTop: "10px" }}>
          <Pagination count={2} color={style.primaryColor} sx ={{"& .MuiPaginationItem-root:focus": {outline: "none", boxShadow: "none" }}}/>
        </Box>
      )}
    </Stack>
  );
};

export default GenerateTable;
