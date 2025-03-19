import React from 'react';
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { Box, Grid2, Typography, Stack } from '@mui/material';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti2 from './components/StatusDokumenCuti2';
import BackButtonBox from './components/BackButton';
import ProfilPegawai from './components/ProfilPegawai';
import Lampiran from './components/Lampiran';
import YangMenyetujui from './components/YangMenyetujui';
import ToolButton from './components/ToolButton';
import HistoriKomentar from './components/HistoriKomentar';


const DetailDokumen = ({scrollbar}) => {
    // const {id} = useParams(); #gunakan jika sudah ada backend
    const style = stylingConfig[0]
    
    // const location = useLocation();
    // const detailData = location.state?.detailData; // Ambil data lengkap dari state

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <BackButtonBox />
                    <StatusDokumenCuti2 />
                    <ProfilPegawai />
                    <Lampiran />
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <YangMenyetujui />
                    <HistoriKomentar />
                    <ToolButton />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default DetailDokumen