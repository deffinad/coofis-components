import React, { useState } from "react";
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
  Typography,
  Checkbox 
} from "@mui/material";
import { stylingConfig } from "../StylingConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from '@mui/system';
import CustomAutocomplete from "./CustomAutocomplete";
import CustomToolTip from "./CustomToolTip";
import CustomDialog from "./DialogBox";
import CheckIcon from "@mui/icons-material/Check";
import PencilIcon from '@mui/icons-material/CreateOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrashIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import PlusIcon from '@mui/icons-material/ControlPointOutlined';
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PersonIcon from '@mui/icons-material/PersonOutline';
import CustomDatePicker from "./CustomDatePicker";
import CustomTextField from "./CustomTextField";

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

const CustomCheckbox = styled(Checkbox)({
  width: 20,
  height: 20,
  borderRadius: 6,
  border: "2px solid #C2C2C2",
  backgroundColor: "white",
  color: "white",
  "&.Mui-checked": {
    backgroundColor: "#1E5EFF",
    border: "2px solid #1E5EFF",
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 12,
  }
});

const statusStyle = {
  'Selesai': { color: "white", background: "#52BD94" },
  'Disetujui': { color: "white", background: "#52BD94" },
  'Ditangguhkan': { color: "white", background: "#EA001E" },
  'Dikembalikan': { color: "black", background: "#FFB020" },
  'Diproses': { color: "white", background: "#FFB020" },
  'Ditolak': { color: "white", background: "#CB3A31" },
  'Tidak Disetujui': { color: "white", background: "#CB3A31" },
  'Batal': { color: "white", background: "#CB3A31" },
};

const GenerateTable = ({ config }) => {
  const navigate = useNavigate()

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [checkedState, setCheckedState] = useState({});

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setDialogOpen(true);
  };

  const headers = config?.find(item => item.type === 'tableHeader')?.children || [];
  const tableData = config?.find(item => item.type === 'tableCell') || {};
  const rows = tableData.children || [];
  const showPagination = tableData.pagination === 1;

  const columns = headers.map(header => ({
    label: header.title,
    field: header.field,
  }));

  const renderCellContent = (row, col) => {
    const fieldValue = row[col.field];
    
    // Handle status field
    if (col.field === "status") {
      if (fieldValue === "checkbox") {
        return (
          <CustomCheckbox
            icon={<CheckIcon style={{ visibility: "hidden" }} />}
            checkedIcon={<CheckIcon />}
            checked={checkedState[row.id] || false}
            onChange={(e) =>
              setCheckedState((prev) => ({
                ...prev,
                [row.id]: e.target.checked,
              }))
            }
          />
        );
      }
      return (
        <Box
          sx={{
            backgroundColor: statusStyle[fieldValue]?.background || style.primaryColor,
            color: statusStyle[fieldValue]?.color || "#FFF",
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
          {fieldValue}
        </Box>
      );
    }

    if (col.field === "detail") {
      switch (fieldValue) {
        case "1":
          return (
            <Stack direction={'row'} justifyContent={'center'} spacing={1.5}>
              <CustomToolTip placeholder={'Lihat'}>
                <EyeIcon 
                  onClick={() => navigate(`${location.pathname}/detailerror`)} 
                  sx={{ fontSize: "20px", color: "#317159", cursor: "pointer" }} 
                />
              </CustomToolTip>
              <CustomToolTip placeholder={'Ubah'}>
                <PencilIcon 
                  sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer" }} 
                />
              </CustomToolTip>
              <CustomToolTip placeholder={'Hapus'}>
                <TrashIcon
                  sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                  onClick={() => handleDeleteClick(row)}
                />
              </CustomToolTip>
            </Stack>
          );
          case "2":
          return (
            <Box
              sx={{
                backgroundColor: "#3366FF",
                color: "white",
                fontWeight: "600",
                padding: 0.8,
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                width: "fit-content",
                height: 'fit-content',
                fontFamily: style.fontFamily,
              }}
              onClick={() => navigate(`${location.pathname}/detailpengaturanuser`)}
            >
              <PersonIcon sx={{ fontSize: "20px", color: 'white' }} />
            </Box>
          );
        }
      }

    if (col.field === "aksi") {
      switch (fieldValue) {
        case "1":
          return (
            <CustomToolTip placeholder={'Lihat'}>
              <EyeIcon 
                onClick={() => navigate(`${location.pathname}/detailerror`)} 
                sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer" }} 
              />
            </CustomToolTip>
          );
        case "2":
          return (
            <CustomToolTip placeholder={'Hapus'}>
              <TrashIcon
                sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                onClick={() => handleDeleteClick(row)}
              />
            </CustomToolTip>
          );
        case "3":
          return (
              <CustomToolTip placeholder={'Batal'}>
                <CloseIcon
                  sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                  onClick={() => handleDeleteClick(row)}
                />
              </CustomToolTip>
          );
        }
      }

    if (col.field === "pesanError") {
        return (
          <Box
          sx={{
            backgroundColor: "#FFB020",
            color: "black",
            fontWeight: "600",
            padding: "4px 8px",
            borderRadius: "4px",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            width: "fit-content",
            fontFamily: style.fontFamily,
          }}
          onClick={() => navigate(`${location.pathname}/detailerror`)}
        >
          <ErrorIcon sx={{ fontSize: "13px", color: "black", cursor: "pointer", mr:0.5 }} />
          <Typography textAlign='center' fontSize="11px" fontFamily={style.fontFamily} fontWeight={600}>
            Detail Error
          </Typography>
        </Box>
        );
    }

    // Handle tindakan field
    if (col.field === "tindakan") {
      switch (fieldValue) {
        case "1":
          return (
            <CustomToolTip placeholder={'Lihat'}>
              <EyeIcon 
                onClick={() => navigate(`${location.pathname}/detailerror`)} 
                sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer" }} 
              />
            </CustomToolTip>
          );
          case "2": // Edit and Delete
          return (
            <Stack direction={'row'} justifyContent={'center'}>
              <CustomToolTip placeholder={'Ubah'}>
                <PencilIcon 
                  sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer", marginRight: "4px" }} 
                />
              </CustomToolTip>
              <CustomToolTip placeholder={'Hapus'}>
                <TrashIcon
                  sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                  onClick={() => handleDeleteClick(row)}
                />
              </CustomToolTip>
            </Stack>
          );
        
        case "3": // View and Cancel
          return (
            <Stack direction={'row'} justifyContent={'center'} spacing={2}>
              <CustomToolTip placeholder={'Lihat'}>
                <EyeIcon 
                  sx={{ fontSize: "20px", color: "#3366FF", cursor: "pointer" }} 
                  onClick={() => navigate(`${location.pathname}/detaildokumen`)}
                />
              </CustomToolTip>
              <CustomToolTip placeholder={'Batalkan'}>
                <CloseIcon
                  sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                  onClick={() => handleDeleteClick(row)}
                />
              </CustomToolTip>
            </Stack>
          );
        
        case "4": // Check button
          return (
            <Box
              sx={{
                backgroundColor: "#FFB020",
                color: "black",
                fontWeight: "600",
                padding: "4px 8px",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                width: "fit-content",
                fontFamily: style.fontFamily,
              }}
              onClick={() => navigate(`${location.pathname}/detaildokumen`)}
            >
              <PencilIcon sx={{ fontSize: "14px", color: 'black', marginRight: "4px" }} />
              <Typography fontSize="11px" fontFamily={style.fontFamily}>
                Periksa
              </Typography>
            </Box>
          );
        
        case "5": // Manage Operator
          return (
            <Box
              sx={{
                backgroundColor: "#52BD94",
                color: "white",
                fontWeight: "600",
                padding: "4px 8px",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                width: "fit-content",
                fontFamily: style.fontFamily,
              }}
              onClick={() => navigate(`${location.pathname}/kelolaoperator`)}
            >
              <Typography fontSize="11px" fontFamily={style.fontFamily}>
                Kelola Operator
              </Typography>
            </Box>
          );
        
        case "6": // Add button (green plus)
          return (
            <Box
              sx={{
                backgroundColor: "#52BD94",
                color: "white",
                fontWeight: "600",
                padding: 0.8,
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                width: "fit-content",
                height: 'fit-content',
                fontFamily: style.fontFamily,
              }}
            >
              <PlusIcon sx={{ fontSize: "20px", color: 'white' }} />
            </Box>
          );
        
        case "7": // Delete button (red trash)
          return (
            <Box
              sx={{
                backgroundColor: "#FF5630",
                color: "white",
                fontWeight: "600",
                padding: 0.8,
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                width: "fit-content",
                height: 'fit-content',
                fontFamily: style.fontFamily,
              }}
            >
              <TrashIcon sx={{ fontSize: "20px", color: 'white' }} />
            </Box>
          );
        
        case "8": // Delete only (red X)
          return (
            <CustomToolTip placeholder={'Hapus'}>
              <CloseIcon
                sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                onClick={() => handleDeleteClick(row)}
              />
            </CustomToolTip>
          );
        
        case "9": // Add sub and Delete
          return (
            <Stack direction={'row'} justifyContent={'center'} spacing={1.5}>
              <CustomToolTip placeholder={'Tambah Sub Cuti'}>
                <PlusIcon
                  sx={{ fontSize: "20px", color: "#317159", cursor: "pointer" }}
                  onClick={() => navigate(`${location.pathname}/kelolasubjeniscuti`)}
                />
              </CustomToolTip>
              <CustomToolTip placeholder={'Hapus'}>
                <CloseIcon
                  sx={{ fontSize: "20px", color: "#FF5630", cursor: "pointer" }}
                  onClick={() => handleDeleteClick(row)}
                />
              </CustomToolTip>
            </Stack>
          );
        
        default:
          return "-";
      }
    }

    // Handle tanggal field
    if (col.field === "tanggal") {
      return (
        <Box p={1}>
          <CustomDatePicker padY={1} fontSize={12}/>
        </Box>
      );
    }

    // Handle TextField cases
    if (fieldValue === 'TextField') {
      return <CustomTextField multiline={false} placeholder={row.placeholder} padX={1.5} padY={0.7} />;
    }

    // Handle array values
    if (Array.isArray(fieldValue)) {
      // Handle TextField with parameters
      if (fieldValue[0] === 'TextField') {
        return (
          <Box display="flex" justifyContent="center">
            <CustomTextField 
                    numberOnly={fieldValue[1]} 
                    placeholder={fieldValue[2]}
                    padY={0.2}
                  />
          </Box>
        );
      } 
      
      // Handle AutoComplete
      if (fieldValue[0] === 'AutoComplete') {
        return (
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Box sx={{
              left: 0,
              top: 0,
              zIndex: 10,
              backgroundColor: 'white',
              width: 'fit-content',
              padding: 0
            }}>
              <CustomAutocomplete
                id={`${row.id}-${col.field}`}
                opsi={fieldValue[1].options}
                placeholder={fieldValue[3]}
                fontSize={12}
              />
            </Box>
          </Box>
        );
      }

      // Handle regular arrays
      return (
        <Box sx={{ textAlign: "left", fontFamily: style.fontFamily }}>
          {fieldValue.map((item, index) => (
            <Typography key={index} fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT} fontFamily={style.fontFamily}>
              {typeof item === 'object' ? JSON.stringify(item) : item}
            </Typography>
          ))}
        </Box>
      );
    }

    // Default case for simple values
    return (
      <Typography fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT} fontFamily={style.fontFamily}>
        {fieldValue}
      </Typography>
    );
  };

  return (
    <Stack spacing={2}>
      {/* Table */}
      <TableContainer component={Paper} sx={{ border: "1px solid #ddd", borderRadius: 2 }}>
        <Table>
          {/* HEADER */}
          <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  sx={{
                    ...tableStyle(style.blackColor, "700"),
                    fontSize: FONT_SIZE,
                    textAlign: columns.length === 2 && index === 0 ? "left" : "center",
                  }}
                >
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
                        fontSize: FONT_SIZE,
                        fontWeight: FONT_WEIGHT,
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
                      {renderCellContent(row, col)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} sx={tableStyle("#9E9E9E", "800", "#EDEDED")}>
                  <Typography fontFamily={style.fontFamily} fontWeight={800} fontSize={14}>Data tidak tersedia</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {showPagination && (
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: "100%", paddingTop: "10px" }}>
          <Typography fontFamily={style.fontFamily} color='black' fontSize={14}>Menampilkan 1 sampai 1 entri</Typography>
          <Pagination count={2} color={style.primaryColor} sx ={{"& .MuiPaginationItem-root:focus": {outline: "none", boxShadow: "none" }}}/>
        </Stack>
      )}
      
      <CustomDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={selectedRow?.dialogTitle || "Hapus Dokumen"}
        text={selectedRow?.dialogTeks}
        onConfirm={() => {
          setDialogOpen(false);
        }}
      />
    </Stack>
  );
};

export default GenerateTable;