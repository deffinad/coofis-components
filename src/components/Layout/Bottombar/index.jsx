import React from 'react'
import { Box, Stack, Typography, Grid2 } from '@mui/material'
import * as MUIIcons from '@mui/icons-material';
import { botMenuListConfig } from '../botbarCofig';

const Botbar = () => {
    return(
        <>
            <Box 
            sx={{
                position: 'fixed', // Fix the Botbar to the bottom
                bottom: 0, // Stick to the bottom
                left: 0, // Span the entire width
                right: 0, // Span the entire width
                height: '10%', // Set height
                background: 'black', // Background color
                zIndex: 1000, // Ensure it stays on top of other content
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
            }}
            >
                {/* <Stack direction={'row'} gap={2} alignItems={'center'} > */}
                <Grid2 container >
                    <Grid2 size={{ md:3, lg:2 }} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold'}}>
                            App Title
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ md: 9, lg: 10 }} sx={{ paddingTop: '20px'}}>
                        <Stack flex={1} px={2} pb={2} direction={'row'}>
                            {botMenuListConfig.map((menu, index) => {
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
                        </Stack>
                    </Grid2>
                </Grid2>
                {/* </Stack> */}
            </Box>
        </>
    )
}

export default Botbar