import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { fontFamily } from '@/shared/AppConst';
import GenerateTable from '../../../components/GenerateTable';
import BackButtonBox from '@/components/Cuti/Layout/components/BackButton';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const UbahDataJenisCuti = ({config}) => {

    const BoxStyle = ({backcolor}) => ({
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
        mr: 3
    })

    return (
        <Box p={4}>
            <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack p = {4} direction='column' spacing = {2}>
                    <Typography fontFamily={fontFamily} color='black' fontWeight={'700'} fontSize={20}>Pengaturan Jenis Cuti</Typography>
                    <GenerateTable config={config} />
                    <Box sx= {BoxStyle({backcolor: "#3366FF"})}>
                        <AddIcon sx={{fontSize:16, mr:0.8}} />
                        <Typography fontSize='16px' fontFamily={fontFamily}>
                            Tambah Jenis Cuti
                        </Typography>
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <BackButtonBox />
                        <Box sx = {BoxStyle({backcolor: "#52BD94"})}>
                            <SaveIcon sx={{fontSize:16, mr:0.8}} />
                            <Typography fontSize='16px' fontFamily={fontFamily}>
                                Simpan
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default UbahDataJenisCuti