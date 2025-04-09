import React from 'react';
import { Stack, Box, Typography, Input } from '@mui/material';
import DropdownTampilkan from '../../components/Tampilkan';
import InputSearchBar from '../../../../Inputs/InputSearchBar';
import GenerateTable from '../../components/GenerateTable';

import { stylingConfig } from '../../StylingConfig';

const OperatorKKPDitambahkan = ({config}) => {
    const style = stylingConfig[0]

    return (
        <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
            <Stack p = {4} direction='column' spacing = {4}>
                <Typography fontFamily={style.fontFamily} color='black' fontWeight={'600'} fontSize={20}>Pegawai yang sudah ditambahkan</Typography>
                <Stack direction='row' justifyContent='space-between'>
                    <DropdownTampilkan value={10}></DropdownTampilkan>
                    <InputSearchBar></InputSearchBar>
                </Stack>
                <GenerateTable config={config}></GenerateTable>
            </Stack>
        </Box>
    )
}

export default OperatorKKPDitambahkan