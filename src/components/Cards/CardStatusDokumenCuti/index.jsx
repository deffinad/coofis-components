import React from "react"
import PropTypes from 'prop-types'
import { Box, Stack, Typography } from "@mui/material"
import * as MUIIcons from "@mui/icons-material"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { fontFamily } from "@/shared/AppConst"

const CardStatusDokumenCuti = ({ title, icon, value, color }) => {
    let IconComponent = MUIIcons[icon] || MUIIcons.HelpOutline;

    return (
        <Box sx={{height:'100%', width: 160, backgroundColor: 'white', p: 1, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction='column' spacing={0.8}>
                <Stack direction='row' spacing={0.8} alignItems='center'>
                    <Box sx = {{height:'25px', width:'25px', color: color, backgroundColor: '#EEF0F7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                        <IconComponent sx={{ fontSize: '20px'}}/>
                    </Box>
                    <Typography sx={{fontSize:'12px', fontFamily: fontFamily, color: color, fontWeight: '600'}}>
                        {title}
                    </Typography>
                </Stack>
                <Stack direction='column' sx = {{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <Typography sx={{paddingRight: '20px', fontSize:'72px',fontWeight:'700' , fontFamily: fontFamily, color: 'black'}}>
                        {value}
                    </Typography>
                    <Typography sx={{fontSize:'10px', fontFamily: fontFamily, color: '#3366FF', display: 'inline-flex', alignItems: 'center'}}>View Details<KeyboardDoubleArrowRightIcon sx={{fontSize: '14px', ml: 0.8}} /></Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

CardStatusDokumenCuti.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
}

export default CardStatusDokumenCuti