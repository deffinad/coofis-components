import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import GenerateTable from '../../components/GenerateTable';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import PencilIcon from '@mui/icons-material/CreateOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const PengaturanHariCuti = ({config1, config2}) => {
    const style = stylingConfig[0]
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Box p={3.5}>
            <Stack direction={'column'} spacing={3.5}>
                <Stack direction={'row'} spacing={3.5}>
                    <Stack p={2.5} direction={'column'} spacing={1.5} sx={{ width:'100%', maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                        <Typography sx={{ fontFamily: style.fontFamily, color: style.primaryColor, fontWeight:700}}>Pengaturan Hari Kerja</Typography>
                        <Typography sx={{ fontFamily: style.fontFamily, color: '#FF5630', fontSize:13, fontWeight:700}}>*Centang checkbox untuk menentukan hari libur dan pilih tombol "simpan"</Typography>
                        <GenerateTable config={config1}/>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Box
                            sx={{
                                backgroundColor: "#52BD94",
                                color: "white",
                                fontWeight: "600",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                display: "inline-flex",
                                cursor: "pointer",
                                width: "fit-content",
                                fontFamily: style.fontFamily,
                            }}
                            >
                                <SaveIcon sx={{fontSize:14, mr:0.4}} />
                                <Typography fontSize="11px" fontFamily={style.fontFamily}>
                                    Simpan
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack p={2.5} direction={'column'} spacing={1.5} sx={{ width:'100%', maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                        <Typography sx={{ fontFamily: style.fontFamily, color: style.primaryColor, fontWeight:700}}>Pengaturan Hari Kalender</Typography>
                        <Typography sx={{ fontFamily: style.fontFamily, color: '#FF5630', fontSize:13, fontWeight:700}}>*Centang checkbox untuk menentukan hari libur dan pilih tombol "simpan"</Typography>
                        <GenerateTable config={config1}/>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Box
                            sx={{
                                backgroundColor: "#52BD94",
                                color: "white",
                                fontWeight: "600",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                display: "inline-flex",
                                cursor: "pointer",
                                width: "fit-content",
                                fontFamily: style.fontFamily,
                            }}
                            >
                                <SaveIcon sx={{fontSize:14, mr:0.4}} />
                                <Typography fontSize="11px" fontFamily={style.fontFamily}>
                                    Simpan
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} spacing={3.5}>
                    <Stack p={2.5} direction={'column'} spacing={1.5} sx={{ width:'100%',  maxWidth: '100%', maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                        <Typography sx={{ fontFamily: style.fontFamily, color: style.primaryColor, fontWeight:700}}>Pengaturan Hari Libur Nasional Indonesia</Typography>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Box
                            sx={{
                                backgroundColor: "#3366FF",
                                color: "white",
                                fontWeight: "600",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                display: "inline-flex",
                                cursor: "pointer",
                                width: "fit-content",
                                fontFamily: style.fontFamily,
                            }}
                            onClick={() => navigate(`${location.pathname}/kelolaliburannasional`)}
                            >
                                <PencilIcon sx={{fontSize:14, mr:0.4}} />
                                <Typography fontSize="11px" fontFamily={style.fontFamily}>
                                    Ubah
                                </Typography>
                            </Box>
                        </Stack>
                        <GenerateTable config={config2}/>
                    </Stack>
                    <Stack p={2.5} direction={'column'} spacing={1.5} sx={{ width:'100%',  maxWidth: '100%', maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                        <Typography sx={{ fontFamily: style.fontFamily, color: style.primaryColor, fontWeight:700}}>Pengaturan Cuti Bersama</Typography>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Box
                            sx={{
                                backgroundColor: "#3366FF",
                                color: "white",
                                fontWeight: "600",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                display: "inline-flex",
                                cursor: "pointer",
                                width: "fit-content",
                                fontFamily: style.fontFamily,
                            }}
                            onClick={() => navigate(`${location.pathname}/kelolacutibersama`)}
                            >
                                <PencilIcon sx={{fontSize:14, mr:0.4}} />
                                <Typography fontSize="11px" fontFamily={style.fontFamily}>
                                    Ubah
                                </Typography>
                            </Box>
                        </Stack>
                        <GenerateTable config={config2}/>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PengaturanHariCuti