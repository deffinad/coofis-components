import React from 'react';
import { Grid2, Stack } from '@mui/material';
import ToolButton from '../../../components/Document/ToolButton';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import { DataStatusTahunan } from './DocsStatusCutiTahunan';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import { DataPegawaiTahunan } from './DocsProfilPegawaiTahunan';
import Lampiran from '../../../components/Document/Lampiran';
import { DataLampiranTahunan } from './DocsLampiranTahunan';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import { DataPenyetujuTahunan } from './DocsYangMenyetujuiTahunan';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataKomentarTahunan } from './DocsHistoriKomentarTahunan';
import InfoKuota from '../components/InfoKuota';
import { DataInfoKuotaTahunan } from './DocsInfoKuotaCutiTahunan';
import { scrollbar } from '../../../utils/scrollbar';


const CutiTahunan = () => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <StatusDokumenCuti config = {DataStatusTahunan} />
                    <ProfilPegawai config = {DataPegawaiTahunan}/>
                    <Lampiran config = {DataLampiranTahunan}/>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <InfoKuota config = {DataInfoKuotaTahunan} />
                    <YangMenyetujui config = {DataPenyetujuTahunan} scrollbar = {scrollbar}/>
                    <HistoriKomentar config = {DataKomentarTahunan} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiTahunan