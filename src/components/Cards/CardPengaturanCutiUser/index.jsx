import { Box, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import BackButtonBox from '@/components/Cuti/Layout/components/BackButton';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomTextField from '@/components/Cuti/Layout/components/CustomTextField';
import { fontFamily, primaryColor } from '@/shared/AppConst';

const BoxStyle = ({backcolor}) => ({
    backgroundColor: backcolor,
    color: "white",
    fontWeight: "500",
    padding: "4px 20px",
    borderRadius: "6px",
    display: "inline-flex",
    cursor: "pointer",
    width: "fit-content",
    fontFamily: fontFamily,
    alignItems: 'center',
    mr: 3
})

const CardPengaturanCutiUser = ({ Nama, NIP}) => {

    return (
        <Stack direction={'column'} p={3.5} sx={{ width:'100%', backgroundColor:'white', borderRadius:3}} spacing={2}>
        <Typography fontFamily={fontFamily} fontWeight={700} color={primaryColor} fontSize={20}> {`${Nama}-${NIP}`} </Typography>
        <Typography fontFamily={fontFamily} fontWeight={700} color={primaryColor} fontSize={20}> Tambah kuota Cuti </Typography>
        <Grid2 container gap={2}>
            <Grid2 sx={{md:6, lg:6}}>
                <Stack direction={'column'} spacing={2}>
                    <Box>
                        <Typography fontFamily={fontFamily} fontWeight={400} color={primaryColor} fontSize={16}>
                            Jenis Cuti
                        </Typography>
                        <CustomTextField  width={500} placeholder={'Cuti Tahunan'} fontSize={'14px'} padX={2} padY={1}/>
                    </Box>
                    <Box>
                        <Typography fontFamily={fontFamily} fontWeight={400} color={primaryColor} fontSize={16}>
                            Tanggal Mulai Kuota Cuti Berlaku
                        </Typography>
                        <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                    </Box>
                    <Box>
                        <Typography fontFamily={fontFamily} fontWeight={400} color={primaryColor} fontSize={16}>
                            Tanggal Mulai Kuota Cuti Dipotong
                        </Typography>
                        <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                    </Box>
                </Stack>
            </Grid2>
            <Grid2 sx={{md:6, lg:6}}>
            <Stack direction={'column'} spacing={2}>
                    <Box>
                        <Typography fontFamily={fontFamily} fontWeight={400} color={primaryColor} fontSize={16}>
                            Tanggal  Kuota Cuti (Dalam Hari)
                        </Typography>
                        <CustomTextField width={500} placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                    </Box>
                    <Box>
                        <Typography fontFamily={fontFamily} fontWeight={400} color={primaryColor} fontSize={16}>
                            Tanggal  Akhir Kuota Cuti (Dalam Hari)
                        </Typography>
                        <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                    </Box>
                    <Box>
                        <Typography fontFamily={fontFamily} fontWeight={400} color={primaryColor} fontSize={16}>
                            Tanggal Selesai Kuota Cuti Dipotong
                        </Typography>
                        <CustomTextField placeholder={'mm/dd/yy'} fontSize={'14px'} padX={2} padY={1}/>
                    </Box>
                </Stack>
            </Grid2>
        </Grid2>
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
    )
}

CardPengaturanCutiUser.propTypes = {
    Nama: PropTypes.string,
    NIP: PropTypes.string,
}

export default CardPengaturanCutiUser