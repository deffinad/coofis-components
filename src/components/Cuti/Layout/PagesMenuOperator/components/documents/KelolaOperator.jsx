import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { stylingConfig } from '../../../StylingConfig';
import OperatorKKPDitemukan from '../../components/OperatorKKPDitemukan';
import OperatorKKPDitambahkan from '../OperatorKKPDitambahkan';
import BackButtonBox from '../../../components/BackButton';

const KelolaOperator = ({config1 , config2}) => {
    const style = stylingConfig[0]

    return (
        <Stack p={5} direction={'column'} spacing={5}>
            <Box p={4} sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <BackButtonBox />
                <Typography color = 'black' fontFamily={style.fontFamily} fontSize={20} fontWeight={700} sx={{paddingY: 2}}> Kelola Operator KKP </Typography>
                <OperatorKKPDitemukan config = {config1}/>
            </Box>
            <OperatorKKPDitambahkan config = {config2} />
        </Stack>
    )
}

export default KelolaOperator