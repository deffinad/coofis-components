import React from 'react'
import { Box, Stack, Grid2, Typography } from '@mui/material'
import { stylingConfig } from '../../../../StylingConfig'
import { DataCuti2 } from '../DocsStatusDokumenCuti2'

const StatusDokumenCuti2 = () => {
    const style = stylingConfig[0];

    const FontStyle = {
        color: style.primaryColor,
        fontFamily: style.fontFamily, 
        fontWeight: '600'
    };
    
    const BoxColor = (backcolor = 'white', fontcolor = 'black') => ({
        width: 'fit-content',
        backgroundColor: backcolor,
        color: fontcolor,
        paddingX: 1.5,
        borderRadius: 5,
        fontWeight: '400'
    });

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', paddingBottom: 5, paddingTop: 2, paddingX: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column' spacing={3.5}>
                <Typography sx={{fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '700'}}>Status Dokumen Cuti </Typography>
                {DataCuti2.length > 0 && (
                    <Grid2 container spacing={1}>
                        <Grid2 item md={2.8} lg={2.8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1.5 }}>
                            {DataCuti2.map((item) => (
                                <Typography key={item.id} sx={{ ...FontStyle }}>
                                    {item.title}:
                                </Typography>
                            ))}
                        </Grid2>

                        <Grid2 item md={9.2} lg={9.2} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {DataCuti2.map((item) => (
                                item.Box ? (
                                    <Box key={item.id} sx={BoxColor(item.backColor, item.fontColor)} >
                                        {item.isi}
                                    </Box>
                                ) : (
                                    <Typography key={item.id} color="black">
                                        {item.isi}
                                    </Typography>
                                )
                            ))}
                        </Grid2>
                    </Grid2>
                )}
            </Stack>
        </Box>
    )
}

export default StatusDokumenCuti2