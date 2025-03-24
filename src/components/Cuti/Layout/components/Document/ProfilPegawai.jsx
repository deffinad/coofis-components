import React from 'react'
import { Box, Stack, Grid2, Typography } from '@mui/material'
import { stylingConfig } from '../../StylingConfig'
import CustomTextField from '../CustomTextField'

const ProfilPegawai = ({ config }) => {
    const style = stylingConfig[0];

    const FontStyle = {
        color: style.primaryColor,
        fontFamily: style.fontFamily, 
        fontWeight: '400'
    };

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column' spacing={2} paddingBottom={6}>
                <Box sx={{borderRadius: "2px 2px 0px 0px", backgroundColor: '#F5F5F5', paddingY: 2, paddingX: 3}}>
                    <Typography sx={{fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '700'}}> Profil Pegawai </Typography>
                </Box>
                <Grid2 container spacing={2.5} paddingTop={2}>
                    <Grid2 paddingLeft={1} size={{md: 2.5, lg: 2.5}} sx={{display: 'flex',flexDirection: 'column', alignItems: 'flex-end', gap: 2.2}}>
                        {config?.filter(item => item.id !== 2 && item.id !== 4 && item.id !== 7).map((item) => (
                            <Typography key={item.id} sx={{ ...FontStyle, ...(item.id === 8 || item.id === 10 ? { mb: 2.8 } : {}) }}>
                                {item.title}
                            </Typography>
                        ))}
                    </Grid2>
                    <Grid2 size={{md: 9.5, lg: 9.5}} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Stack direction={'column'} spacing={1.7} mr={4}>
                            <Stack direction="row" spacing={2} alignItems="center" justifyContent='space-between'>
                                <CustomTextField disabled={config?.find(item => item.id === 1)?.disabled} placeholder={config?.find(item => item.id === 1)?.isi} width='46%'/>
                                <Typography sx={{ ...FontStyle }}>{config?.find(item => item.id === 2)?.title}</Typography>
                                <CustomTextField disabled={config?.find(item => item.id === 2)?.disabled} placeholder={config?.find(item => item.id === 2)?.isi} width='36%'/>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems="center" justifyContent='space-between'>
                                <CustomTextField disabled={config?.find(item => item.id === 3)?.disabled} placeholder={config?.find(item => item.id === 3)?.isi} width='35%'/>
                                <Typography sx={{ ...FontStyle }}>{config?.find(item => item.id === 4)?.title}</Typography>
                                <CustomTextField disabled={config?.find(item => item.id === 4)?.disabled} placeholder={config?.find(item => item.id === 4)?.isi} width='48%'/>
                            </Stack>
                            <CustomTextField disabled={config?.find(item => item.id === 5)?.disabled} placeholder={config?.find(item => item.id === 5)?.isi} width='99.7%'/>
                            <Stack direction='row' justifyContent='space-between'>
                                <CustomTextField disabled={config?.find(item => item.id === 6)?.disabled} placeholder={config?.find(item => item.id === 6)?.isi} width='40%'/>
                                <Typography sx={{ ...FontStyle }}>{config?.find(item => item.id === 7)?.title}</Typography>
                                <CustomTextField disabled={config?.find(item => item.id === 7)?.disabled} placeholder={config?.find(item => item.id === 7)?.isi} width='25%'/>
                            </Stack>
                            <CustomTextField disabled={config?.find(item => item.id === 8)?.disabled} placeholder={config?.find(item => item.id === 8)?.isi} width='99.7%' height='50px'/>
                            <CustomTextField disabled={config?.find(item => item.id === 9)?.disabled} placeholder={config?.find(item => item.id === 9)?.isi} width='99.7%'/>
                            <CustomTextField disabled={config?.find(item => item.id === 10)?.disabled} placeholder={config?.find(item => item.id === 10)?.isi} width='99.7%' height='50px'/>
                            <CustomTextField disabled={config?.find(item => item.id === 11)?.disabled} placeholder={config?.find(item => item.id === 11)?.isi} width='99.7%'/>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Stack>
        </Box>
    )
}

export default ProfilPegawai