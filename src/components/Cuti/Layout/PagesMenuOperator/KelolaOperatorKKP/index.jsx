import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import OperatorKKPDitemukan from '../components/OperatorKKPDitemukan';
import { DataOperatorKKPDitemukan } from '../DocsOperatorKKPDitemukan';
import OperatorKKPDitambahkan from '../components/OperatorKKPDitambahkan';
import { DataOperatorKKPDitambahkan } from '../DocsOperatorKKPDitambahkan';

const KelolaOperatorKKP = () => {
    const style = stylingConfig[0]

    return (
        <Stack p={5} direction={'column'} spacing={5}>
            <Box p={4} sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Typography color = 'black' fontFamily={style.fontFamily} fontSize={20} fontWeight={700} sx={{mb: 2}}> Kelola Operator KKP </Typography>
                <OperatorKKPDitemukan config = {DataOperatorKKPDitemukan} />
            </Box>
            <OperatorKKPDitambahkan config = {DataOperatorKKPDitambahkan} />
        </Stack>
    )
}

export default KelolaOperatorKKP