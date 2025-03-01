/* eslint-disable no-unused-vars */
import React from 'react'
import { Avatar, Stack } from '@mui/material'
import InputSearchBar from '../../../../components/Inputs/InputSearchBar'
import coofisLogo from '../../../../assets/coofis-logo-stretch.png'
import avatar from '../../../../assets/avatar.jpeg'

const AppHeader = () => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ p: 2, background: 'black', borderRadius: 2, }}>
            <img src={coofisLogo} style={{ borderRadius: 5, height: '30px' }} />
            <InputSearchBar iconPosition='left' placeholder='Cari Sesuatu' />
            <Avatar alt='avatar-user' src={avatar} />
        </Stack>
    )
}

export default AppHeader
