import React from 'react'
import { Box, Stack, Typography, Grid2 } from '@mui/material'
import * as MUIIcons from '@mui/icons-material';
import { menuListConfig } from '../../menuLayoutConfig';

const ListMenu = () =>  {
    return(
        <>
            <Stack flex={1} px={2} pb={2} direction={'row'}>
                {menuListConfig.map((menu, index) => {
                    let IconComponent = MUIIcons[menu.icon]
                    return (
                        <Stack key={menu.id} py={1} px={2} direction={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={2} sx={{ borderRadius: '10px', cursor: 'pointer' }}>
                            <IconComponent fontSize='medium' sx={{ color: 'white' }} />
                            <Stack direction={'column'}>
                                <Typography sx={{ color: 'white', fontWeight: index == 0 ? 600 : '' }}>{menu.title}</Typography>
                                {menu.sub_title && <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>{menu.sub_title}</Typography>}
                            </Stack>
                        </Stack>
                    )
                })}
            </Stack>
        </>
    )
}

export default ListMenu