import { Box, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import { stylingConfig } from '../../../StylingConfig';
import BackButtonBox from '../../../components/BackButton';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomTextField from '../../../components/CustomTextField';
import GenerateTable from '../../../components/GenerateTable';
import DropdownTampilkan from '../../../components/Tampilkan';
import InputSearchBar from '../../../../../Inputs/InputSearchBar';

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

const DetailPengaturanPerUser = ({config}) => {

    return (
        <Stack direction={'column'} p = {3.5} sx={{mr:6}} spacing={3.5}>
            <Stack direction={'column'} p={3.5} sx={{ width:'100%', backgroundColor:'white', borderRadius:3}} spacing={2}>
                <Typography fontFamily={style.fontFamily} fontWeight={700} color={style.primaryColor} fontSize={20}> NILAM AMALIA PUSPARANI-19850504009122001 </Typography>
                <Typography fontFamily={style.fontFamily} fontWeight={700} color={style.primaryColor} fontSize={20}> Tambah kuota Cuti </Typography>
                <Grid2 container gap={2}>
                    <Grid2 sx={{md:6, lg:6}}>
                        <Stack direction={'column'} spacing={2}>
                            <Box>
                                <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16}>
                                    Jenis Cuti
                                </Typography>
                                <CustomTextField  width={500} placeholder={'Cuti Tahunan'} fontSize={'14px'} padX={2} padY={1}/>
                            </Box>
                            <Box>
                                <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16}>
                                    Tanggal Mulai Kuota Cuti Berlaku
                                </Typography>
                                <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                            </Box>
                            <Box>
                                <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16}>
                                    Tanggal Mulai Kuota Cuti Dipotong
                                </Typography>
                                <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2 sx={{md:6, lg:6}}>
                    <Stack direction={'column'} spacing={2}>
                            <Box>
                                <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16}>
                                    Tanggal  Kuota Cuti (Dalam Hari)
                                </Typography>
                                <CustomTextField width={500} placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                            </Box>
                            <Box>
                                <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16}>
                                    Tanggal  Akhir Kuota Cuti (Dalam Hari)
                                </Typography>
                                <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                            </Box>
                            <Box>
                                <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16}>
                                    Tanggal Selesai Kuota Cuti Dipotong
                                </Typography>
                                <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                            </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
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
            <Stack direction={'column'} p={3.5} sx={{ width:'100%', backgroundColor:'white', borderRadius:3}} spacing={2.5}>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                    <DropdownTampilkan/>
                    <InputSearchBar/>
                </Stack>
                <GenerateTable config={config}/>
            </Stack>
        </Stack>
    )
}

export default DetailPengaturanPerUser