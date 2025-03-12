import React from 'react'
import { Box, Stack, Typography, Grid2 } from '@mui/material'
import * as MUIIcons from '@mui/icons-material';
import { botMenuListConfig } from '../botbarCofig';
import { menuListConfig } from '../layoutConfig'; 
// import ListMenu from './Menu List/list';
import ListMenu from './Menu List/ListTest';

const Botbar = () => {
    return(
        <>
            <Box 
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '10%',
                background: 'black',
                zIndex: 1000,
            }}
            >
                <Grid2 container >
                    <Grid2 size={{ md:3, lg:2 }} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold'}}>
                            Coofis-Verse
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ md: 9, lg: 10 }} sx={{ paddingTop: '20px'}}>
                        <ListMenu/>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Botbar