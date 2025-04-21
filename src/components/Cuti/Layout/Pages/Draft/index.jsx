import React from 'react'
import { DataDraft } from './DocsDraft'
import { Stack, Box } from '@mui/material'
import InputSearchBar from '../../../../Input/InputSearchBar'
import DropdownTampilkan from '../../components/Tampilkan'
import GenerateTable from '../../components/GenerateTable'
import { scrollbar } from '../../utils/scrollbar'

const Draft = () => {

    return (
        <Box p={5}>
            <Stack direction='column' p={4} spacing = {4} sx={{...scrollbar('#9E9E9E'), maxHeight:'100%', overflow: "auto", backgroundColor:'white', borderRadius:3}}>
                <Stack direction='row' justifyContent='space-between'>
                    <DropdownTampilkan value={10}></DropdownTampilkan>
                    <InputSearchBar></InputSearchBar>
                </Stack>
                <GenerateTable config={DataDraft}></GenerateTable>
            </Stack>
        </Box>
    )
}

export default Draft