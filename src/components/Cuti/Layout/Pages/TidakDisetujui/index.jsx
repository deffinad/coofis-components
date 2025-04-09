import React from 'react';
import { Stack, Box, TextField } from '@mui/material';
import DropdownTampilkan from '../../components/Tampilkan';
import InputSearchBar from '../../../../Inputs/InputSearchBar';
import GenerateTable from '../../components/GenerateTable';
import { DataTidakDisetujui } from './DocsTidakDisetujui';
import { scrollbar } from '../../utils/scrollbar';

const TidakDisetujui = () => {

    return (
        <Box p={5}>
            <Stack direction='column' p={4} spacing = {4} sx={{...scrollbar('#9E9E9E'), maxHeight:'100%', overflow: "auto", backgroundColor:'white', borderRadius:3}}>
                <Stack direction='row' justifyContent='space-between'>
                    <DropdownTampilkan value={10}></DropdownTampilkan>
                    <InputSearchBar></InputSearchBar>
                </Stack>
                <GenerateTable config={DataTidakDisetujui}></GenerateTable>
            </Stack>
        </Box>
    )
}

export default TidakDisetujui