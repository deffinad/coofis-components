import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import GenerateTable from '../../../components/GenerateTable';
import { stylingConfig } from '../../../StylingConfig';
import BackButtonBox from '../../../components/BackButton';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const style = stylingConfig[0]

const BoxStyle = ({backcolor}) => ({
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
    mr: 3
})

const UbahDataJenisCuti = ({config}) => {

    return (
        <Box p={4}>
            <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack p = {4} direction='column' spacing = {2}>
                    <Typography fontFamily={style.fontFamily} color='black' fontWeight={'700'} fontSize={20}>Pengaturan Jenis Cuti</Typography>
                    <GenerateTable config={config} />
                    <Box sx= {BoxStyle({backcolor: "#3366FF"})}>
                        <AddIcon sx={{fontSize:16, mr:0.8}} />
                        <Typography fontSize='16px' fontFamily={style.fontFamily}>
                            Tambah Jenis Cuti
                        </Typography>
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <BackButtonBox />
                        <Box sx = {BoxStyle({backcolor: "#52BD94"})}>
                            <SaveIcon sx={{fontSize:16, mr:0.8}} />
                            <Typography fontSize='16px' fontFamily={style.fontFamily}>
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