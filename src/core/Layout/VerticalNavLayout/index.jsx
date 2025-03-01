/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid2 } from '@mui/material';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

const VerticalNavLayout = () => {
    return (
        <Grid2 container height={'100%'} columnSpacing={1}>
            <Grid2 size={{ md: 3, lg: 2 }} maxHeight={'100%'}>
                <AppSidebar />
            </Grid2>
            <Grid2 size={{ md: 9, lg: 10 }} maxHeight={'100%'}>
                <AppHeader />
            </Grid2>
        </Grid2>
    )
}

export default VerticalNavLayout
