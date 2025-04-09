import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import DropdownTampilkan from '../../components/Tampilkan';
import InputSearchBar from '../../../../Inputs/InputSearchBar';
import GenerateTable from '../../components/GenerateTable';
import { stylingConfig } from '../../StylingConfig';
import PencilIcon from '@mui/icons-material/CreateOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const PengaturanJenisCuti = ({config}) => {
    const style = stylingConfig[0]
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Box p={4}>
            <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack p = {4} direction='column' spacing = {2}>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <Typography fontFamily={style.fontFamily} color='black' fontWeight={'700'} fontSize={20}>Pengaturan Jenis Cuti</Typography>
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
                                alignItems: 'center',
                                height: 'fit-content'
                            }}
                            onClick={() => navigate(`${location.pathname}/ubahdatajeniscuti`)}
                            >
                                <PencilIcon sx={{fontSize:12, mr:0.4}} />
                                <Typography fontSize="12px" fontFamily={style.fontFamily}>
                                    Ubah Data Jenis Cuti
                                </Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between'>
                        <DropdownTampilkan value={10}></DropdownTampilkan>
                        <InputSearchBar></InputSearchBar>
                    </Stack>
                    <GenerateTable config={config}/>
                </Stack>
            </Box>
        </Box>
    )
}

export default PengaturanJenisCuti