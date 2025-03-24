import React from 'react';
import { Grid2, Stack } from '@mui/material';
import ToolButton from '../../../components/Document/ToolButton';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import { DataStatusDiluarTanggunganNegara } from './DocsStatusCutiDiluarTanggunganNegara';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import { DataPegawaiDiluarTanggunganNegara } from './DocsProfilPegawaiDiluarTanggunganNegara';
import Lampiran from '../../../components/Document/Lampiran';
import { DataLampiranDiluarTanggunganNegara } from './DocsLampiranDiluarTanggunganNegara';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import { DataPenyetujuDiluarTanggunganNegara } from './DocsYangMenyetujuiDiluarTanggunganNegara';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataKomentarDiluarTanggunganNegara } from './DocsHistoriKomentarDiluarTanggunganNegara';
import InfoKuota from '../components/InfoKuota';
import { DataInfoKuotaDiluarTanggunganNegara } from './DocsInfoKuotaCutiDiluarTanggunganNegara';



const CutiDiluarTanggunganNegara = ({scrollbar}) => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.8, lg: 7.8}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <StatusDokumenCuti config = {DataStatusDiluarTanggunganNegara} />
                    <ProfilPegawai config = {DataPegawaiDiluarTanggunganNegara}/>
                    <Lampiran config = {DataLampiranDiluarTanggunganNegara}/>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.2, lg: 4.2}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <InfoKuota config = {DataInfoKuotaDiluarTanggunganNegara} />
                    <YangMenyetujui config = {DataPenyetujuDiluarTanggunganNegara} />
                    <HistoriKomentar config = {DataKomentarDiluarTanggunganNegara} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiDiluarTanggunganNegara