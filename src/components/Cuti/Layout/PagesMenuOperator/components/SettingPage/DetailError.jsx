import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { stylingConfig } from '../../../StylingConfig';
import GenerateTable from '../../../components/GenerateTable';
import DropdownTampilkan from '../../../components/Tampilkan';
import InputSearchBar from '../../../../../Input/InputSearchBar';

const style = stylingConfig[0]

const DetailError = ({config}) => {

    return (
        <Box p = {3.5} sx={{mr:6}}>
            <Stack direction={'column'} p={3.5} sx={{ width:'100%', backgroundColor:'white', borderRadius:3}} spacing={2.5}>
                <Typography fontFamily={style.fontFamily} fontWeight={700} color={style.primaryColor} fontSize={20}> Laporan Upload Kuota </Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <DropdownTampilkan />
                        <InputSearchBar />
                    </Stack>
                <GenerateTable config={config}/>
            </Stack>
        </Box>
    )
}

export default DetailError