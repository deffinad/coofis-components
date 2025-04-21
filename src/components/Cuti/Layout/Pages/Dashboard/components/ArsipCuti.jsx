import React from 'react'
import { Typography, Box } from '@mui/material'
import { stylingConfig } from '../../../StylingConfig'
import GenerateTable from '../../../components/GenerateTable'
import { DocsArsipCuti } from '../DocsArsipCuti'
const ArsipCuti = ({config}) => {
    const style = stylingConfig[0]

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Typography sx = {{fontSize: '27px', fontFamily: style.fontFamily, color: style.primaryColor, fontWeight: '600'}}>Arsip Cuti</Typography>
            <Box style={{ padding: 5}}> 
                <GenerateTable config={DocsArsipCuti} />
            </Box>
        </Box>
    )
}

export default ArsipCuti