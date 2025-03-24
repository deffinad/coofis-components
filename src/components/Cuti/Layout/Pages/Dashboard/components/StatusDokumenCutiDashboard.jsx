import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { stylingConfig } from '../../../StylingConfig'
import * as MUIIcons from '@mui/icons-material'

const StatusDokumenCutiDashboard = ({config}) => {
    const style = stylingConfig[0]

    return (
        <Stack direction='column' spacing={1}>
            <Typography sx={{fontSize: '27px', fontWeight: '600', fontFamily: style.fontFamily, color: style.primaryColor}}>Status Dokumen Cuti</Typography>
                <Stack direction='row' spacing={5} justifyContent='space-between'>
                    {config?.length > 0 && config?.map((item) => {
                        let IconComponent = MUIIcons[item.icon] || MUIIcons.HelpOutline;

                        return (
                            <React.Fragment key= {item.id}>
                                <Box sx={{height:'100%', width:'100%', backgroundColor: 'white', p: 1, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
                                    <Stack direction='column' spacing={0.8}>
                                        <Stack direction='row' spacing={0.8} alignItems='center'>
                                            <Box sx = {{height:'25px', width:'25px', color: item.color, backgroundColor: item.backcolor, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                                                <IconComponent sx={{ fontSize: '20px'}}/>
                                            </Box>
                                            <Typography sx={{fontSize:'12px', fontFamily: style.fontFamily, color: item.color, fontWeight: '600'}}>{item.title}</Typography>
                                        </Stack>
                                        <Stack direction='column' sx = {{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                            <Typography sx={{paddingRight: '20px', fontSize:'72px',fontWeight:'700' , fontFamily: style.fontFamily, color: 'black'}}>{item.count}</Typography>
                                            <Typography sx={{fontSize:'10px', fontFamily: style.fontFamily, color: '#3366FF', display: 'inline-flex', alignItems: 'center'}}>View Details<MUIIcons.KeyboardDoubleArrowRight sx={{fontSize: '14px', ml: 0.8}} /></Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </React.Fragment>
                        )
                    })}
                </Stack>
        </Stack>
    )
    
}

export default StatusDokumenCutiDashboard