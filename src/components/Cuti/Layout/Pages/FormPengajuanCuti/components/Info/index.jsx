import React from 'react'
import { stylingConfig } from '../../../../StylingConfig'
import { Box, Stack,Typography } from '@mui/material'

const Info = ({config, widget, width = '100%'}) => {
    const style = stylingConfig[0]

    const BoxStyle = (backcolor, bordercolor, color) => ({
        width: '67px', 
        height: '67px',
        border: '6px solid ' + bordercolor, 
        borderRadius: 50, 
        fontSize: '25px', 
        background: backcolor, 
        color: color, 
        alignContent:'center', 
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '600'
    })

    const colorMapping = {
        "Kuota Penuh": ["#F3F6FF", "#D6E0FF", "#3366FF"],
        "Kuota Terpakai": ["#FFFAF1", "#FFDFA6", "#66460D"],
        "Sisa Kuota": ["#F5FBF8", "#DCF2EA", "#317159"],
        "Cuti Tahunan": ["#F3F6FF", "#D6E0FF", "#3366FF"],
        "Cuti Hari Besar": ["#FFFAF1", "#FFE2A8", "#66460D"],
        "Cuti Sakit": ["#F5FBF8", "#DCF2EA", "#317159"],
        "Cuti Alasan Penting": ["#F5F6FA", "#E3E6F0", "#3E4466"],
        "Cuti Melahirkan": ["#FFF5F2", "#FFDDD1", "#E03F00"],
        "Cuti di luar tanggungan": ["#F3F3F3", "#DCDCDC", "#8F8F8F"]
    };
    

    return (
        <Stack direction= 'row' justifyContent={'space-evenly'} p={widget ? 2 : 0} sx={{ width: width, height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: widget ? '1px 6px 8px rgba(0, 0, 0, 0.1)' : 'none'}}>
        {config?.map((item) => (
            <Stack key={item.id} direction="column" alignItems={'center'} spacing={1}>
                <Box sx={BoxStyle(...colorMapping[item.title])}>{item.count}</Box>
                <Typography 
                    fontWeight="600" 
                    fontFamily={style.fontFamily} 
                    fontSize="13px" 
                    textAlign="center" 
                    color="black"
                >
                    {item.title}
                </Typography>
            </Stack>
        ))}
        </Stack>
    );
}

export default Info