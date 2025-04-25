import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/FileDownloadOutlined'
import UploadIcon from '@mui/icons-material/FileUploadOutlined'
import GenerateTable from '@/components/Cuti/Layout/components/GenerateTable';
// import { useLocation, useNavigate } from 'react-router-dom';
import { fontFamily } from '@/shared/AppConst';
import DropdownTampilkan from '@/components/Cuti/Layout/components/Tampilkan';
import InputSearchBar from '@/components/Input/InputSearchBar';

const BoxStyle = ({backcolor, border = false}) => ({
    backgroundColor: backcolor,
    color: "white",
    fontWeight: "500",
    padding: "4px 8px",
    borderRadius: "6px",
    display: "inline-flex",
    cursor: "pointer",
    width: "fit-content",
    fontFamily: fontFamily,
    alignItems: 'center',
    border: border ? '1px solid #C2C2C2' : 'none',
    mr: 3
})

const CardKelolaKuotaCuti = ({ tableKuota, tablePegawai}) => {
    // const location = useLocation()
    // const navigate = useNavigate()

    return (
        <Box p={4}>
            <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack p = {4} direction='column' spacing = {2}>
                    <Typography fontFamily={fontFamily} color='black' fontWeight={'700'} fontSize={20}>Kelola Kuota Cuti</Typography>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography fontFamily={fontFamily} color='#EA001E' fontWeight={'400'} fontSize={16}>{'Jenis ekstensi file yang dapat diupload adalah .xlsx. '}<Typography component={'span'} fontWeight={'700'}> Tempale file</Typography></Typography>
                        <Box sx= {BoxStyle({backcolor: "#52BD94"})}>
                            <DownloadIcon sx={{fontSize:12, mr:0.8}} />
                            <Typography fontSize='12px' fontFamily={fontFamily}>
                                Unduh
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Box sx= {BoxStyle({backcolor: "#EDEDED", border: true})}>
                            <Typography color='black' fontSize='12px' fontFamily={fontFamily} fontWeight={700}>
                                Browse..
                            </Typography>
                        </Box>
                            <Typography color='black' fontSize='18px' fontFamily={fontFamily} fontWeight={400}>
                                No file selected.
                            </Typography>
                    </Stack>
                    <Box sx= {BoxStyle({backcolor: "#474D66"})}>
                        <UploadIcon sx={{fontSize:12, mr:0.8}} />
                        <Typography fontSize='12px' fontFamily={fontFamily}>
                            Unggah
                        </Typography>
                    </Box>
                    <Box sx={{backgroundColor: '#9E9E9E', width:'100%', height:'3px'}}></Box>
                    <GenerateTable config={tableKuota}/>
                    <Typography fontFamily={fontFamily} color='black' fontWeight={'700'} fontSize={20}>Cari Pegawai</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <DropdownTampilkan/>
                        <InputSearchBar/>
                    </Stack>
                    <GenerateTable config={tablePegawai}/>
                </Stack>
            </Box>
        </Box>
    )
}

CardKelolaKuotaCuti.propTypes = {
    tableKuota: PropTypes.object,
    tablePegawai: PropTypes.object,
}

export default CardKelolaKuotaCuti