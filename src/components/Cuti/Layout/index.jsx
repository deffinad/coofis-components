import React from 'react';
import { Grid2} from '@mui/material';
import AppSidebar from './components/Sidebar';
import Header from './components/Header';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import DisetujuiAnda from './Pages/DisetujuiAnda';
import ButuhPersetujuan from './Pages/ButuhPersetujuan';
import DetailDokumen from './Pages/ButuhPersetujuan/DetailDokumen';
import Draft from './Pages/Draft';
import Disetujui from './Pages/Disetujui';
import TidakDisetujui from './Pages/TidakDisetujui';
import SedangDiproses from './Pages/SedangDiproses';
import CutiTahunan from './Pages/FormPengajuanCuti/CutiTahunan';
import CutiSakit from './Pages/FormPengajuanCuti/CutiSakit';
import CutiMelahirkan from './Pages/FormPengajuanCuti/CutiMelahirkan';
import CutiHariBesar from './Pages/FormPengajuanCuti/CutiHariBesar';
import CutiAlasanPenting from './Pages/FormPengajuanCuti/CutiAlasanPenting';
import CutiDiluarTanggunganNegara from './Pages/FormPengajuanCuti/CutiDiluarTanggunganNegara';
import DashboardMenuOperator from './PagesMenuOperator/DashboardMenuOperator';
import { CutiAdminSidebarConfig } from './CutiAdminSidebarConfig';
import { CutiSidebarConfig } from './CutiSidebarConfig';
import { CardData } from './PagesMenuOperator/CardData';
const Layout = () => {
    const location = useLocation();

    const sidebarConfig = location.pathname.startsWith("/menuoperator") ? CutiAdminSidebarConfig : CutiSidebarConfig;
    
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
            <Grid2 size={{ md: 3, lg: 3 }} sx={{alignItems: "start"}} >            
                <AppSidebar config={sidebarConfig}/>
            </Grid2>
            <Grid2 size={{ md: 9, lg: 9 }} maxHeight={'100%'}>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path='/dashboard' element={<Dashboard scrollbar = {scrollbar}/>} />

                    <Route path='/disetujuianda' element={<DisetujuiAnda scrollbar = {scrollbar} />} />
                    <Route path='/butuhpersetujuan' element={<ButuhPersetujuan scrollbar = {scrollbar} />} />

                    <Route path='/draft' element={<Draft scrollbar = {scrollbar}/>} />
                    <Route path='/sedangdiproses' element={<SedangDiproses scrollbar = {scrollbar}/>} />
                    <Route path='/disetujui' element={<Disetujui scrollbar={scrollbar}/>} />
                    <Route path='/tidakdisetujui' element={<TidakDisetujui scrollbar={scrollbar}/>} />
                    
                    <Route path='/menuoperator/dashboard' element={<DashboardMenuOperator config={CardData} scrollbar={scrollbar}/>} />

                    <Route path="/formpengajuancuti/cutitahunan" element={<CutiTahunan scrollbar = {scrollbar}/>} />
                    <Route path="/formpengajuancuti/cutiharibesar" element={<CutiHariBesar scrollbar = {scrollbar}/>} />
                    <Route path="/formpengajuancuti/cutisakit" element={<CutiSakit scrollbar = {scrollbar}/>} />
                    <Route path="/formpengajuancuti/cutimelahirkan" element={<CutiMelahirkan scrollbar = {scrollbar}/>} />
                    <Route path="/formpengajuancuti/cutialasanpenting" element={<CutiAlasanPenting scrollbar = {scrollbar}/>} />
                    <Route path="/formpengajuancuti/cutidiluartanggungannegara" element={<CutiDiluarTanggunganNegara scrollbar = {scrollbar}/>} />

                    <Route path="/butuhpersetujuan/detaildokumen" element={<DetailDokumen scrollbar = {scrollbar} />} />
                    <Route path="/dashboard/detaildokumen" element={<DetailDokumen scrollbar = {scrollbar} />} />
                </Routes>
            </Grid2>
        </Grid2>
    )
}

export default Layout