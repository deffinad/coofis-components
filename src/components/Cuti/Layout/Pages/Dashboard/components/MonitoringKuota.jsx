import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { stylingConfig } from '../../../StylingConfig'
import { DataKuota } from '../DocsKuota'
import LabelledCircularPercentage from '../../../components/LabelledCircuralPercentage'

const MonitoringKuota = () => {
    const style = stylingConfig[0]

    return (
        <Stack direction='column' spacing={1}>
            <Typography sx={{fontSize: '27px', fontWeight: '600', fontFamily: style.fontFamily, color: style.primaryColor}}>Monitoring Kuota</Typography>
                <Stack direction='row' spacing={5} justifyContent='space-between'>
                    {DataKuota.length > 0 && DataKuota.map((item) => {

                        return (
                            <React.Fragment key= {item.id}>
                                <Box sx={{height:'260px', width:'100%', backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
                                    <Stack direction='column' spacing={3} textAlign='center' >
                                            <Typography sx={{fontSize:'18px',fontWeight: '700', fontFamily: style.fontFamily, color: item.color}}>{item.title}</Typography>
                                            <Box display='flex' justifyContent='center'>
                                                <LabelledCircularPercentage value={33.3} color={item.color}/>
                                            </Box>
                                            <Stack direction='column' spacing={1}>
                                                {item.children.map((child) => {

                                                    return (
                                                        <React.Fragment key = {child.id}>
                                                            <Stack direction='row' justifyContent='space-between'>
                                                                <Typography sx = {{fontFamily: style.fontFamily, color: style.primaryColor, fontWeight: '600'}}>{child.title}</Typography>
                                                                <Box component='div' className='menu-badge' color = 'white' textAlign='center' alignContent='center' fontSize = '12px' width='18px' height='18px' borderRadius={20} sx={{backgroundColor: item.color, fontFamily: style.fontFamily}}>
                                                                    {child.count}
                                                                </Box>
                                                            </Stack>
                                                        </React.Fragment>
                                                    )
                                                })}
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

export default MonitoringKuota