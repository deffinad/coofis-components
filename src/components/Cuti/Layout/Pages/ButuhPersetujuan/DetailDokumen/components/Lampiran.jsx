import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { stylingConfig } from '../../../../StylingConfig'

const Lampiran = () => {
const style = stylingConfig[0]

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column'>
                <Box sx={{borderRadius: "2px 2px 0px 0px", backgroundColor: '#F5F5F5', paddingY: 2, paddingX: 3}}>
                    <Typography sx={{fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '700'}}> Lampiran </Typography>
                </Box>
                {/* Buat mapping */}
                <Box sx={{paddingY: 2, paddingX: 4}}>
                    <Typography sx={{fontSize:'17px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Tidak Ada Lampiran </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Lampiran