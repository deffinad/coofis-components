import React from 'react';
import * as MUIIcon from '@mui/icons-material';
import { Typography, Box, Stack, Grid2, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import GenerateTable from '../../components/GenerateTable';
import CustomTextField from '../../components/CustomTextField';
import CustomAutocomplete from '../../components/CustomAutocomplete';

const DokumenCuti = ({config}) => {
    const style = stylingConfig[0]

    const FontStyle = (weight, fontSize) => ({
        fontFamily: style.fontFamily,
        color: style.primaryColor,
        fontWeight: weight,
        fontSize: fontSize
    });    

    return (
        <Box p={5}>
            <Stack direction={'column'} p={4} sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography sx={FontStyle(700, 24)}>Dokumen Cuti</Typography>
                    <Box
                    sx={{
                        backgroundColor: '#FFB020',
                        color: style.primaryColor,
                        padding: "6px 16px",
                        borderRadius: "6px",
                        display: "inline-flex",
                        alignItems: "center",
                        cursor: "pointer",
                        width: "fit-content",
                        fontFamily: style.fontFamily
                    }}
                    >
                        <MUIIcon.FileUploadOutlined sx={{fontSize:20, mr:0.3}}/>
                        <Typography fontFamily={style.fontFamily} fontWeight={550}>Ekspor data cuti</Typography>
                    </Box>
                </Stack>
                    <Grid2 container paddingY={2.5}>
                        <Grid2 size={{md:2, lg:2}}>
                            <Stack direction={'column'} spacing={4.65} paddingY={1.2}>
                                <Typography sx={ FontStyle(400, 16) }>Pemohon</Typography>
                                <Typography sx={ FontStyle(400, 16) }>Jenis Cuti</Typography>
                                <Typography sx={ FontStyle(400, 16) }>Status</Typography>
                                <Typography sx={ FontStyle(400, 16) }>Periode</Typography>
                                <Typography sx={ FontStyle(400, 16) }>Status Pegawai</Typography>
                            </Stack>
                        </Grid2>
                        <Grid2 size={{md:10, lg:10}}>
                            <Stack direction={'column'} spacing={2.5}>
                                <CustomTextField placeholder={'Masukan pemohon'} padX={3} padY={1} fontSize={16}/>
                                <CustomAutocomplete placeholder={'Masukan jenis cuti'} opsi={['SEMUA']} minWidth={'auto'}/>
                                <RadioGroup row >
                                    <FormControlLabel value="SEMUA" control={<Radio />} label="SEMUA" sx={ FontStyle }/>
                                    <FormControlLabel value="Sedang Proses" control={<Radio />} label="Sedang Proses"  sx={ FontStyle }/>
                                    <FormControlLabel value="Disetujui" control={<Radio />} label="Disetujui"  sx={ FontStyle }/>
                                    <FormControlLabel value="Tidak Disetujui" control={<Radio />} label="Tidak Disetujui"  sx={ FontStyle }/>
                                </RadioGroup>
                                <CustomTextField placeholder={'Isi Periode'} padX={3} padY={1} fontSize={16}/>
                                <CustomAutocomplete placeholder={'Masukan status pegawai'} opsi={['SEMUA']} minWidth={'auto'}/>
                            </Stack>
                        </Grid2>
                    </Grid2>
                <Stack direction='row' justifyContent={'flex-end'} sx={{mb:2.5}}>
                    <Box
                    sx={{
                        backgroundColor: '#3366FF',
                        color: 'white',
                        padding: "6px 16px",
                        borderRadius: "6px",
                        display: "inline-flex",
                        alignItems: "center",
                        cursor: "pointer",
                        width: "fit-content",
                        fontFamily: style.fontFamily
                    }}
                    >
                        <MUIIcon.Search sx={{fontSize:20, mr:0.2}}/>
                        <Typography fontFamily={style.fontFamily} fontWeight={550}>Cari</Typography>
                    </Box>
                </Stack>
                <GenerateTable config={config} />
            </Stack>
        </Box>
    )
}

export default DokumenCuti