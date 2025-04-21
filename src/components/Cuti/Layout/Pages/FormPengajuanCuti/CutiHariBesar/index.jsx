import React from 'react';
import { Grid2, Stack, Box, Typography } from '@mui/material';
import ToolButton from '../../../components/Document/ToolButton';
import { stylingConfig } from '../../../StylingConfig';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import { DataStatusHariBesar } from './DocsStatusCutiHariBesar';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import { DataPegawaiHariBesar } from './DocsProfilPegawaiHariBesar';
import Lampiran from '../../../components/Document/Lampiran';
import { DataLampiranHariBesar } from './DocsLampiranHariBesar';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import { DataPenyetujuHariBesar } from './DocsYangMenyetujuiHariBesar.js';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataKomentarHariBesar } from './DocsHistoriKomentarHariBesar';
import InfoKuota from '../components/Info/index.jsx';
import { DataInfoKuotaHariBesar } from './DocsInfoKuotaCutiHariBesar';
import { scrollbar } from '../../../utils/scrollbar';



const CutiHariBesar = () => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <StatusDokumenCuti config = {DataStatusHariBesar} />
                    <ProfilPegawai config = {DataPegawaiHariBesar}/>
                    <Lampiran config = {DataLampiranHariBesar}/>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <Box p={2} sx={{ minHeight: '210px', height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Stack direction= 'column' spacing={4}>
                            <Typography sx={{fontStyle: 'italic',fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Info Kuota </Typography>
                            <InfoKuota config = {DataInfoKuotaHariBesar} />
                        </Stack>
                    </Box>
                    <YangMenyetujui config = {DataPenyetujuHariBesar} scrollbar = {scrollbar} />
                    <HistoriKomentar config = {DataKomentarHariBesar} />
                    <ToolButton four = {false} back = {false} />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default CutiHariBesar