import React from 'react'
import { Box, Stack, Grid2, Typography } from '@mui/material'
import { stylingConfig } from '../../../../StylingConfig'
import { DataPegawai } from '../DocsProfilPegawai'

const ProfilPegawai = () => {
    const style = stylingConfig[0];

    const FontStyle = {
        color: style.primaryColor,
        fontFamily: style.fontFamily, 
        fontWeight: '600'
    };
    
    const BoxStyle = ( width = '100%', height = '') => ({
        backgroundColor: "#EDEDED",
        border: "1px solid #C2C2C2",
        borderRadius: "6px",
        paddingX: 1,
        paddingY: 0.5,
        minHeight: height,
        width: width,
        maxWidth: '100%',
        color: "#9E9E9E",
        fontSize: '12px',
    });

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column' spacing={2} paddingBottom={6}>
                <Box sx={{borderRadius: "2px 2px 0px 0px", backgroundColor: '#F5F5F5', paddingY: 2, paddingX: 3}}>
                    <Typography sx={{fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '700'}}> Profil Pegawai </Typography>
                </Box>
                <Grid2 container spacing={2.5} paddingTop={2}>
                    <Grid2 paddingLeft={1} size={{md: 2.5, lg: 2.5}} sx={{display: 'flex',flexDirection: 'column', alignItems: 'flex-end', gap: 2.2}}>
                    {DataPegawai.filter(item => item.id !== 2 && item.id !== 4 && item.id !== 7).map((item) => (
                        <Typography key={item.id} sx={{ ...FontStyle, ...(item.id === 8 || item.id === 10 ? { mb: 4 } : {}) }}>
                            {item.title}
                        </Typography>
                    ))}
                    </Grid2>
                    <Grid2 size={{md: 9.5, lg: 9.5}} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Stack direction={'column'} spacing={1.7} mr={4}>
                            <Stack direction="row" spacing={2} alignItems="center" justifyContent='space-between'>
                                <Box sx ={ BoxStyle( '46%' ) }>{DataPegawai.find(item => item.id === 1)?.isi}</Box>
                                <Typography sx={{ ...FontStyle }}>{DataPegawai.find(item => item.id === 2)?.title}</Typography>
                                <Box sx={ BoxStyle( '36%') }> {DataPegawai.find(item => item.id === 1)?.isi} </Box>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems="center" justifyContent='space-between'>
                                <Box sx ={ BoxStyle( '30%') }> {DataPegawai.find(item => item.id === 3)?.isi} </Box>
                                <Typography sx={{ ...FontStyle }}>{DataPegawai.find(item => item.id === 4)?.title}</Typography>
                                <Box sx={ BoxStyle( '48%') }> {DataPegawai.find(item => item.id === 4)?.isi} </Box>
                            </Stack>
                            <Box sx={ BoxStyle( '96,5%' ) }> {DataPegawai.find(item => item.id === 5)?.isi} </Box>
                            <Stack direction='row' justifyContent='space-between'>
                                <Box sx ={ BoxStyle( '35%') }> {DataPegawai.find(item => item.id === 6)?.isi} </Box>
                                <Typography sx={{ ...FontStyle }}>{DataPegawai.find(item => item.id === 7)?.title}</Typography>
                                <Box sx={ BoxStyle( '25%') }> {DataPegawai.find(item => item.id === 7)?.isi} </Box>
                            </Stack>
                            <Box sx={ BoxStyle( '96,5%', '50px' ) }> {DataPegawai.find(item => item.id === 8)?.isi} </Box>
                            <Box sx={ BoxStyle( '96,5%' ) }> {DataPegawai.find(item => item.id === 9)?.isi} </Box>
                            <Box sx={ BoxStyle( '96,5%', '50px' ) }> {DataPegawai.find(item => item.id === 10)?.isi} </Box>
                            <Box sx={ BoxStyle( '96,5%' ) }> {DataPegawai.find(item => item.id === 11)?.isi} </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Stack>
        </Box>
    )
}

export default ProfilPegawai