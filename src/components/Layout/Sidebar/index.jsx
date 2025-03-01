/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack, Typography } from '@mui/material'
import * as MUIIcons from '@mui/icons-material';
import ListMenu from './components/ListMenu';

const Sidebar = () => {
    return (
        <Stack direction={'column'} gap={2} sx={{ height: '100%', background: 'black', borderRadius: 2 }}>
            <Stack p={2} direction={'row'} justifyContent={'space-between'}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>App Title</Typography>
                <MUIIcons.ArrowForward fontSize='medium' sx={{ cursor: 'pointer' }} />
            </Stack>
            {/* <Stack flex={1} px={2} pb={2} direction={'column'}>
                {menuListConfig.map((menu, index) => {
                    let IconComponent = MUIIcons[menu.icon]
                    return (
                        <Stack key={menu.id} py={1} px={2} direction={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={2} sx={{ borderRadius: '10px', background: index == 0 ? '#333232a1' : '', cursor: 'pointer' }}>
                            <IconComponent fontSize='medium' sx={{ color: 'white' }} />
                            <Stack direction={'column'}>
                                <Typography sx={{ color: 'white', fontWeight: index == 0 ? 600 : '' }}>{menu.title}</Typography>
                                {menu.sub_title && <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>{menu.sub_title}</Typography>}
                            </Stack>
                        </Stack>
                    )
                })}
            </Stack> */}
            <Stack flex={1} px={2} pb={2}>
               <ListMenu />
            </Stack>
        </Stack>
    )
}

export default Sidebar
