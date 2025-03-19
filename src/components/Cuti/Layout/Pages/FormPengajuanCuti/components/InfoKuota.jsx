import React from 'react'
import { stylingConfig } from '../../../StylingConfig'
import { Box, Stack,Typography } from '@mui/material'

const InfoKuota = () => {
    const style = stylingConfig[0]

    const BoxStyle = {
        width: '80px', 
        height: '80px',
        border: '6px solid #D6E0FF', 
        borderRadius: 50, 
        fontSize: '30px', 
        background: '#F3F6FF', 
        color: '#3366FF', 
        alignContent:'center', 
        textAlign: 'center',
        fontStyle: 'italic'
    }

    return (
        <Box p={3} sx={{height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column' spacing={4}>
                <Typography sx={{fontStyle: 'italic',fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Info Kuota </Typography>
                <Stack direction= 'row'>
                    <Stack direction= 'column'>
                        <Box sx={BoxStyle}>24</Box>
                        <Typography color='black'>Test</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default InfoKuota