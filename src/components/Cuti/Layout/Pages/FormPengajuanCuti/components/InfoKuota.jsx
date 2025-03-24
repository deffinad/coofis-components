import React from 'react'
import { stylingConfig } from '../../../StylingConfig'
import { Box, Stack,Typography } from '@mui/material'

const InfoKuota = ({config}) => {
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
        "Sisa Kuota": ["#F5FBF8", "#DCF2EA", "#317159"]
    };
    

    return (
        <Box p={2} sx={{ minHeight: '210px', height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column' spacing={4}>
                <Typography sx={{fontStyle: 'italic',fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Info Kuota </Typography>
                <Stack direction= 'row' justifyContent={'space-evenly'}>
                {config.map((item) => (
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
            </Stack>
        </Box>
    );
}

export default InfoKuota