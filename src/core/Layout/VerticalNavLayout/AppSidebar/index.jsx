/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack, Typography } from '@mui/material'
import * as MUIIcons from '@mui/icons-material';
import ListMenu from './components/ListMenu';

const AppSidebar = () => {
    return (
        <Stack direction={'column'} gap={2} sx={{ height: '100%', background: 'black', borderRadius: 2 }}>
            <Stack p={2} direction={'row'} justifyContent={'space-between'}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>App Title</Typography>
                <MUIIcons.ArrowForward fontSize='medium' sx={{ cursor: 'pointer' }} />
            </Stack>
            <Stack flex={1} px={2} pb={2}>
               <ListMenu />
            </Stack>
        </Stack>
    )
}

export default AppSidebar
