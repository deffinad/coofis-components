import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import GenerateTable from '../../components/GenerateTable';
import { stylingConfig } from '../../StylingConfig';
import DownloadIcon from '@mui/icons-material/FileDownloadOutlined'
import UploadIcon from '@mui/icons-material/FileUploadOutlined'
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownTampilkan from '../../components/Tampilkan';
import InputSearchBar from '../../../../Inputs/InputSearchBar';

const style = stylingConfig[0]

const BoxStyle = ({backcolor, border = false}) => ({
    backgroundColor: backcolor,
    color: "white",
    fontWeight: "500",
    padding: "4px 8px",
    borderRadius: "6px",
    display: "inline-flex",
    cursor: "pointer",
    width: "fit-content",
    fontFamily: style.fontFamily,
    alignItems: 'center',
    border: border ? '1px solid #C2C2C2' : 'none',
    mr: 3
})

const KelolaKuotaCuti = ({config1, config2}) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Box p={4}>
            <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack p = {4} direction='column' spacing = {2}>
                    <Typography fontFamily={style.fontFamily} color='black' fontWeight={'700'} fontSize={20}>Kelola Kuota Cuti</Typography>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography fontFamily={style.fontFamily} color='#EA001E' fontWeight={'400'} fontSize={16}>{'Jenis ekstensi file yang dapat diupload adalah .xlsx. '}<Typography component={'span'} fontWeight={'700'}> Tempale file</Typography></Typography>
                        <Box sx= {BoxStyle({backcolor: "#52BD94"})}>
                            <DownloadIcon sx={{fontSize:12, mr:0.8}} />
                            <Typography fontSize='12px' fontFamily={style.fontFamily}>
                                Unduh
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Box sx= {BoxStyle({backcolor: "#EDEDED", border: true})}>
                            <Typography color='black' fontSize='12px' fontFamily={style.fontFamily} fontWeight={700}>
                                Browse..
                            </Typography>
                        </Box>
                            <Typography color='black' fontSize='18px' fontFamily={style.fontFamily} fontWeight={400}>
                                No file selected.
                            </Typography>
                    </Stack>
                    <Box sx= {BoxStyle({backcolor: "#474D66"})}>
                        <UploadIcon sx={{fontSize:12, mr:0.8}} />
                        <Typography fontSize='12px' fontFamily={style.fontFamily}>
                            Unggah
                        </Typography>
                    </Box>
                    <Box sx={{backgroundColor: '#9E9E9E', width:'100%', height:'3px'}}></Box>
                    <GenerateTable config={config1}/>
                    <Typography fontFamily={style.fontFamily} color='black' fontWeight={'700'} fontSize={20}>Cari Pegawai</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <DropdownTampilkan/>
                        <InputSearchBar/>
                    </Stack>
                    <GenerateTable config={config2}/>
                </Stack>
            </Box>
        </Box>
    )
}

export default KelolaKuotaCuti