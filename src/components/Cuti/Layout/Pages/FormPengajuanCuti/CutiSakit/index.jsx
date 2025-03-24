import React from 'react';
import { Grid2, Stack } from '@mui/material';
import ToolButton from '../../../components/Document/ToolButton';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import { DataStatusSakit } from './DocsStatusCutiSakit';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import { DataPegawaiSakit } from './DocsProfilPegawaiSakit';
import Lampiran from '../../../components/Document/Lampiran';
import { DataLampiranSakit } from './DocsLampiranSakit';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import { DataPenyetujuSakit } from './DocsYangMenyetujuiSakit';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataKomentarSakit } from './DocsHistoriKomentarSakit';
import InfoKuota from '../components/InfoKuota';
import { DataInfoKuotaSakit } from './DocsInfoKuotaCutiSakit';



const CutiSakit = ({scrollbar}) => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <StatusDokumenCuti config = {DataStatusSakit} />
                    <ProfilPegawai config = {DataPegawaiSakit}/>
                    <Lampiran config = {DataLampiranSakit}/>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <InfoKuota config = {DataInfoKuotaSakit} />
                    <YangMenyetujui config = {DataPenyetujuSakit} />
                    <HistoriKomentar config = {DataKomentarSakit} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiSakit