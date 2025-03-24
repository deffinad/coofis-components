import React from 'react';
import { Grid2, Stack } from '@mui/material';
import StatusDokumenCuti from '../../../components/Document/StatusDokumenCuti';
import BackButtonBox from '../../../components/BackButton';
import ProfilPegawai from '../../../components/Document/ProfilPegawai';
import Lampiran from '../../../components/Document/Lampiran';
import YangMenyetujui from '../../../components/Document/YangMenyetujui';
import ToolButton from '../../../components/Document/ToolButton';
import HistoriKomentar from '../../../components/Document/HistoriKomentar';
import { DataCuti } from './DocsStatusDokumenCuti';
import { DataKomentar } from './DocsHistoriKomentar';
import { DataPenyetuju } from './DocsYangMenyetujui';
import { DataPegawai } from './DocsProfilPegawai';

const DetailDokumen = ({scrollbar}) => {

    return (
        <Grid2 container>
            <Grid2 size = {{md: 7.5, lg: 7.5}}>
                <Stack paddingTop={4} paddingLeft={4} direction= 'column' spacing={4}>
                    <BackButtonBox />
                    <StatusDokumenCuti config = {DataCuti} />
                    <ProfilPegawai config = {DataPegawai} />
                    <Lampiran />
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4.5, lg: 4.5}}>
                <Stack p={4} direction= 'column' spacing={4}>
                    <YangMenyetujui config = {DataPenyetuju}/>
                    <HistoriKomentar config = {DataKomentar} />
                    <ToolButton />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default DetailDokumen