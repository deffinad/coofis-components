import React from 'react';
import { Stack } from '@mui/material';
import DropdownTampilkan from '../../components/Tampilkan';
import InputSearchBar from '../../../../Input/InputSearchBar';
import GenerateTable from '../../components/GenerateTable';
import Info from '../FormPengajuanCuti/components/Info';
import { DataDisetujuiAnda } from './DocsDisetujuiAnda';
import { scrollbar } from '../../utils/scrollbar';
import { DataInfoCuti } from '../InfoCuti';

const DisetujuiAnda = () => {

    return (
        <Stack p={5} direction={'column'}>
            <Stack direction={'row'}>
                <Info config={DataInfoCuti} widget={true}/>
            </Stack>
            <Stack direction='column' p={4} spacing = {4} sx={{...scrollbar('#9E9E9E'), maxHeight:'100%', overflow: "auto", backgroundColor:'white', borderRadius:3}}>
                <Stack direction='row' justifyContent='space-between'>
                    <DropdownTampilkan value={10}></DropdownTampilkan>
                    <InputSearchBar></InputSearchBar>
                </Stack>
                <GenerateTable config={DataDisetujuiAnda}></GenerateTable>
            </Stack>
        </Stack>
    )
}

export default DisetujuiAnda