import React from 'react';
import { Grid2} from '@mui/material';
import AppSidebar from './Sidebar';
import Header from './Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import DisetujuiAnda from './DisetujuiAnda';
import ButuhPersetujuan from './ButuhPersetujuan';

const Layout = () => {
    const scrollbar = (thumbColor) => ({
        '&::-webkit-scrollbar': {
            width: '8px', // Lebar scrollbar
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent', // Warna track scrollbar
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#E0E0E0', // Warna thumb scrollbar
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555', // Warna thumb saat hover
        }
    })

    return (
        <Grid2 container minHeight={'100vh'} sx={{ backgroundColor:"#EEF0F7" }}>
            <Grid2 size={{ md: 2.5, lg: 2.5 }} sx={{alignItems: "start"}} >            
                <AppSidebar />
            </Grid2>
            <Grid2 size={{ md: 9.5, lg: 9.5 }} maxHeight={'100%'}>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path='/dashboard' element={<Dashboard scrollbar = {scrollbar}/>} />
                    <Route path='/disetujuianda' element={<DisetujuiAnda scrollbar = {scrollbar} />} />
                    <Route path='/butuhpersetujuan' element={<ButuhPersetujuan scrollbar = {scrollbar} />} />
                </Routes>
            </Grid2>
        </Grid2>
        
    )
}

export default Layout