import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { stylingConfig } from '../../../StylingConfig';
import BackButtonBox from '../../../components/BackButton';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomTextField from '../../../components/CustomTextField';
import GenerateTable from '../../../components/GenerateTable';

const style = stylingConfig[0]

const BoxStyle = ({backcolor}) => ({
    backgroundColor: backcolor,
    color: "white",
    fontWeight: "500",
    padding: "4px 20px",
    borderRadius: "6px",
    display: "inline-flex",
    cursor: "pointer",
    width: "fit-content",
    fontFamily: style.fontFamily,
    alignItems: 'center',
    mr: 3
})

const KelolaLiburanNasional = ({config}) => {

    return (
        <Box p = {3.5} sx={{mr:6}}>
            <Stack direction={'column'} p={3.5} sx={{ width:'100%', backgroundColor:'white', borderRadius:3}} spacing={2.5}>
                <Typography fontFamily={style.fontFamily} fontWeight={700} color={style.primaryColor} fontSize={20}> Kelola Liburan Nasional </Typography>
                <Box >
                    <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16} mb={0.8}>
                        Tahun Berlaku
                    </Typography>
                    <Stack direction={'row'} spacing={4}>
                        <CustomTextField padX={1} padY={0.5} numberOnly={true} fontSize={14} placeholder={'Contoh : 2022'}/>
                        <Box sx= {BoxStyle({backcolor: "#4C4DDC"})}>
                            Generate
                        </Box>
                    </Stack>
                </Box>
                <GenerateTable config={config}/>
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
    )
}

export default KelolaLiburanNasional