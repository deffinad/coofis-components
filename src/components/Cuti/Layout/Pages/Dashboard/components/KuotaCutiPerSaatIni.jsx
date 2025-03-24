import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { stylingConfig } from '../../../StylingConfig'
import GenerateTable from '../../../components/GenerateTable'

const KuotaCutiSaatIni = ({config1, config2}) => {
    const style = stylingConfig[0]
    return (
        <Box sx={{height:'100%', backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Typography sx = {{fontSize: '27px', fontFamily: style.fontFamily, color: style.primaryColor, fontWeight: '600'}}>Kuota Cuti Per Saat Ini</Typography>
            <Stack direction= 'column' style={{ padding: 5}} spacing={4}> 
                <GenerateTable config={config1} />
                <GenerateTable config={config2} />
            </Stack>
        </Box>
    )
}

export default KuotaCutiSaatIni