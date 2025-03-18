import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { stylingConfig } from '../../../StylingConfig'
import { KuotaCuti1 } from '../DocsKuotaCuti1'
import { KuotaCuti2 } from '../DocsKuotaCuti2'
import GenerateTable from '../../../components/GenerateTable'

const KuotaCutiSaatIni = () => {
    const style = stylingConfig[0]
    return (
        <Box sx={{height:'100%', backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Typography sx = {{fontSize: '27px', fontFamily: style.fontFamily, color: style.primaryColor, fontWeight: '600'}}>Kuota Cuti Per Saat Ini</Typography>
            <Stack direction= 'column' style={{ padding: 5}} spacing={4}> 
                <GenerateTable config={KuotaCuti1} />
                <GenerateTable config={KuotaCuti2} />
            </Stack>
        </Box>
    )
}

export default KuotaCutiSaatIni