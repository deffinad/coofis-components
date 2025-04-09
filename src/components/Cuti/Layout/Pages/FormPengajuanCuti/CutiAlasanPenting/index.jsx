import React from 'react';
import { Grid2, Stack } from '@mui/material';
import ToolButton from '../../../components/Document/ToolButton';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import { DataStatusAlasanPenting } from './DocsStatusCutiAlasanPenting';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import { DataPegawaiAlasanPenting } from './DocsProfilPegawaiAlasanPenting';
import Lampiran from '../../../components/Document/Lampiran';
import { DataLampiranAlasanPenting } from './DocsLampiranAlasanPenting';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import { DataPenyetujuAlasanPenting } from './DocsYangMenyetujuiAlasanPenting';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataKomentarAlasanPenting } from './DocsHistoriKomentarAlasanPenting';
import InfoKuota from '../components/InfoKuota';
import { DataInfoKuotaAlasanPenting } from './DocsInfoKuotaCutiAlasanPenting';


const CutiAlasanPenting = () => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <StatusDokumenCuti config = {DataStatusAlasanPenting} />
                    <ProfilPegawai config = {DataPegawaiAlasanPenting}/>
                    <Lampiran config = {DataLampiranAlasanPenting}/>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <InfoKuota config = {DataInfoKuotaAlasanPenting} />
                    <YangMenyetujui config = {DataPenyetujuAlasanPenting} />
                    <HistoriKomentar config = {DataKomentarAlasanPenting} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiAlasanPenting