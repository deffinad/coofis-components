import React from 'react'
import { Stack, Typography } from '@mui/material'
import ListMenu from './components/ListMenu';
import InputSearchBar from '../../../Inputs/InputSearchBar';
import { stylingConfig } from '../StylingConfig';

const AppSidebar = () => {
    const style = stylingConfig[0]

    return (
        <Stack direction={'column'} gap={2} sx={{ overflow: 'auto', background: 'white', boxShadow : '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <Stack flex={1} px={2} pb={2} py={2}>
               <InputSearchBar />
               <ListMenu />
            </Stack>
        </Stack>
    )
}

export default AppSidebar