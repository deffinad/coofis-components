import React from 'react';
import { Typography, Grid2, Box, Stack} from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import ListDate from './components/ListDate';
import { DateData } from './DateData';
import StatusDokumenCutiDashboard from './components/StatusDokumenCutiDashboard';
import { DataCuti } from './DocsCuti'
import MonitoringKuota from './components/MonitoringKuota';
import { DataKuota } from './DocsKuota'
import KuotaCutiSaatIni from './components/KuotaCutiPerSaatIni';
import { KuotaCuti1 } from './DocsKuotaCuti1'
import { KuotaCuti2 } from './DocsKuotaCuti2'
import ArsipCuti from './components/ArsipCuti';
import { DocsArsipCuti } from './DocsArsipCuti'

const Dashboard = ({scrollbar}) => {
    const style = stylingConfig[0]

    return (
        <Grid2 container>
            <Grid2 size = {{md: 9.5, lg: 9.5}} maxHeight = {'100%'}>
                <Stack p={4} spacing = {4} sx={{...scrollbar('#9E9E9E'), maxHeight:'600px', overflow: "auto"}}>
                    <StatusDokumenCutiDashboard config = {DataCuti}/>
                    <MonitoringKuota config = {DataKuota} />
                    <KuotaCutiSaatIni config1 = {KuotaCuti1} config2 = {KuotaCuti2} />
                    <ArsipCuti config = {DocsArsipCuti} />
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 2.5, lg: 2.5}} maxHeight = {'100%'}>
                <Box minHeight={'100vh'}  backgroundColor= 'white' overflow= 'auto' sx ={{ boxShadow: '-5px 6px 8px rgba(0, 0, 0, 0.2), inset -3px 5px 6px rgba(0, 0, 0, 0.17)'}}  >
                    <Stack direction='column' p={3} sx={{ ...scrollbar('#E0E0E0'), maxHeight:'100vh', overflow: "auto"}} >
                        <Typography sx={{textAlign:'center', fontSize: '17px', fontWeight: '700', fontFamily: style.fontFamily, color: style.primaryColor}}>Libur Nasional 2025</Typography>
                        <ListDate config = {DateData} />
                    </Stack>
                </Box>
            </Grid2>
        </Grid2>        
    )
}

export default Dashboard