import React from "react"
import PropTypes from 'prop-types'
import { Box, Stack, Typography, CircularProgress } from "@mui/material"
import { fontFamily, primaryColor } from "@/shared/AppConst"

const CardMonitoringKuota = ({ title, kuota, penggunaan, sisa, color }) => {
    const circleSize = 110

    return (
        <Box sx={{height:'260px', width: 200, backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction='column' spacing={3} textAlign='center' >
                    <Typography sx={{fontSize:'18px',fontWeight: '700', fontFamily: fontFamily, color: color}}> {title} </Typography>
                    <Box display='flex' justifyContent='center'>
                        <Box position="relative" display="inline-flex" width={circleSize} height={circleSize}>
                            {/* Background Circle */}
                            <CircularProgress
                            variant="determinate"
                            value={100}
                            size={circleSize}
                            thickness={4}
                            sx={{ color: "#eee" }}
                            />
                            {/* Progress Circle */}
                            <CircularProgress
                            variant="determinate"
                            value={penggunaan/kuota*100}
                            size={circleSize}
                            thickness={4}
                            style={{ transform: "rotate" }}
                            sx={{
                                color: color,
                                position: "absolute",
                                "& circle": { strokeLinecap: "round" },
                            }}
                            />
                            {/* Percentage Text */}
                            <Box
                            position="absolute"
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <Typography variant="body1" fontWeight="bold" color="#616161">
                                {`${Number(((penggunaan / kuota) * 100).toFixed(1)).toLocaleString("id-ID")}%`}
                            </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Stack direction='column' spacing={1}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography sx = {{fontFamily: fontFamily, color: primaryColor, fontWeight: '600'}}>Kuota</Typography>
                            <Box component='div' className='menu-badge' color = 'white' textAlign='center' alignContent='center' fontSize = '12px' width='18px' height='18px' borderRadius={20} sx={{backgroundColor: color, fontFamily: fontFamily}}>
                                {kuota}
                            </Box>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography sx = {{fontFamily: fontFamily, color: primaryColor, fontWeight: '600'}}>Penggunaan</Typography>
                            <Box component='div' className='menu-badge' color = 'white' textAlign='center' alignContent='center' fontSize = '12px' width='18px' height='18px' borderRadius={20} sx={{backgroundColor: color, fontFamily: fontFamily}}>
                                {penggunaan}
                            </Box>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography sx = {{fontFamily: fontFamily, color: primaryColor, fontWeight: '600'}}>Sisa</Typography>
                            <Box component='div' className='menu-badge' color = 'white' textAlign='center' alignContent='center' fontSize = '12px' width='18px' height='18px' borderRadius={20} sx={{backgroundColor: color, fontFamily: fontFamily}}>
                                {sisa}
                            </Box>
                        </Stack>
                    </Stack>
            </Stack>
        </Box>
    )
}

CardMonitoringKuota.propTypes = {
    title: PropTypes.string,
    kuota: PropTypes.number,
    penggunaan: PropTypes.number,
    sisa: PropTypes.number,
    color: PropTypes.string
}

export default CardMonitoringKuota
