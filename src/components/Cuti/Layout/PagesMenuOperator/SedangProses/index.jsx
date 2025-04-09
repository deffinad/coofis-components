import React from 'react';
import { Typography, Box } from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import GenerateTable from '../../components/GenerateTable';

const SedangProses = ({config}) => {
    const style = stylingConfig[0]

    return (
        <Box p={5}>
            <Box p={4} sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Typography color = 'black' fontFamily={style.fontFamily} fontSize={20} fontWeight={700} sx={{mb: 1}}> Kelola Operator Unit Kerja </Typography>
                <GenerateTable config={config} />
            </Box>
        </Box>
    )
}

export default SedangProses