import React from 'react';
import { Grid2, Stack, Box, Typography } from '@mui/material';
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
import InfoKuota from '../components/Info';
import { DataInfoKuotaDiluarTanggunganNegara } from './DocsInfoKuotaCutiDiluarTanggunganNegara';



const CutiDiluarTanggunganNegara = () => {
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
                <Box p={2} sx={{ minHeight: '210px', height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Stack direction= 'column' spacing={4}>
                            <Typography sx={{fontStyle: 'italic',fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Info Kuota </Typography>
                            <InfoKuota config = {DataInfoKuotaDiluarTanggunganNegara} />
                        </Stack>
                    </Box>
                    <YangMenyetujui config = {DataPenyetujuDiluarTanggunganNegara} />
                    <HistoriKomentar config = {DataKomentarDiluarTanggunganNegara} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiDiluarTanggunganNegara