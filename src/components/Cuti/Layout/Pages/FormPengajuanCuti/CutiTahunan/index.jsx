import React from 'react';
import { Grid2, Stack, Box, Typography } from '@mui/material';
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
import InfoKuota from '../components/Info';
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
                    <Box p={2} sx={{ minHeight: '210px', height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Stack direction= 'column' spacing={4}>
                            <Typography sx={{fontStyle: 'italic',fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Info Kuota </Typography>
                            <InfoKuota config = {DataInfoKuotaTahunan} widget = {false} />
                        </Stack>
                    </Box>
                    <YangMenyetujui config = {DataPenyetujuTahunan} scrollbar = {scrollbar}/>
                    <HistoriKomentar config = {DataKomentarTahunan} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiTahunan