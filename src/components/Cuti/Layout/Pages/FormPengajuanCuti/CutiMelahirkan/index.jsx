import React from 'react';
import { Grid2, Stack } from '@mui/material';
import ToolButton from '../../../components/Document/ToolButton';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import { DataStatusMelahirkan } from './DocsStatusCutiMelahirkan';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import { DataPegawaiMelahirkan } from './DocsProfilPegawaiMelahirkan';
import Lampiran from '../../../components/Document/Lampiran';
import { DataLampiranMelahirkan } from './DocsLampiranMelahirkan';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import { DataPenyetujuMelahirkan } from './DocsYangMenyetujuiMelahirkan';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataKomentarMelahirkan } from './DocsHistoriKomentarMelahirkan';
import InfoKuota from '../components/InfoKuota';
import { DataInfoKuotaMelahirkan } from './DocsInfoKuotaCutiMelahirkan';



const CutiMelahirkan = () => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <StatusDokumenCuti config = {DataStatusMelahirkan} />
                    <ProfilPegawai config = {DataPegawaiMelahirkan}/>
                    <Lampiran config = {DataLampiranMelahirkan}/>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <InfoKuota config = {DataInfoKuotaMelahirkan} />
                    <YangMenyetujui config = {DataPenyetujuMelahirkan} />
                    <HistoriKomentar config = {DataKomentarMelahirkan} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiMelahirkan