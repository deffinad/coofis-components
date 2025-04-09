import React from 'react';
import { Grid2} from '@mui/material';
import AppSidebar from './components/Sidebar';
import Header from './components/Header';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import DisetujuiAnda from './Pages/DisetujuiAnda';
import TidakDisetujuiAnda from './Pages/TIdakDisetujuiAnda';
import DikembalikanAnda from './Pages/DikembalikanAnda';
import ButuhPersetujuan from './Pages/ButuhPersetujuan';
import DetailDokumen from './Pages/ButuhPersetujuan/DetailDokumen';
import Draft from './Pages/Draft';
import Disetujui from './Pages/Disetujui';
import TidakDisetujui from './Pages/TidakDisetujui';
import SedangDiproses from './Pages/SedangDiproses';
import CutiTahunan from './Pages/FormPengajuanCuti/CutiTahunan';
import CutiSakit from './Pages/FormPengajuanCuti/CutiSakit';
import CutiMelahirkan from './Pages/FormPengajuanCuti/CutiMelahirkan';
import CutiHariBesar from './Pages/FormPengajuanCuti/CutiHariBesar';
import CutiAlasanPenting from './Pages/FormPengajuanCuti/CutiAlasanPenting';
import CutiDiluarTanggunganNegara from './Pages/FormPengajuanCuti/CutiDiluarTanggunganNegara';
import DashboardMenuOperator from './PagesMenuOperator/DashboardMenuOperator';
import { CutiAdminSidebarConfig } from './CutiAdminSidebarConfig';
import { CutiSidebarConfig } from './CutiSidebarConfig';
import { CardData } from './PagesMenuOperator/CardData';
import KelolaOperatorKKP from './PagesMenuOperator/KelolaOperatorKKP';
import KelolaOperatorUnitKerja from './PagesMenuOperator/KelolaOperatorUnitKerja';
import { DataOperatorUnitKerja } from './PagesMenuOperator/DocsOperatorUnitKerja';
import KelolaOperatorSatuanKerja from './PagesMenuOperator/KelolaOperatorSatuanKerja';
import KelolaOperator from './PagesMenuOperator/components/documents/KelolaOperator';
import { DataOperatorKKPDitambahkan } from './PagesMenuOperator/DocsOperatorKKPDitambahkan';
import { DataOperatorKKPDitemukan } from './PagesMenuOperator/DocsOperatorKKPDitemukan';
import SedangProses from './PagesMenuOperator/SedangProses';
import { DataSedangProses } from './PagesMenuOperator/DocsSedangProses';
import DokumenCuti from './PagesMenuOperator/DokumenCuti';
import { DataDokumenCuti } from './PagesMenuOperator/DocsDokumenCuti';
import { DataKomentarDiproses } from './Pages/SedangDiproses/DocsHistoriKomentarDiproses';
import PengaturanHariCuti from './PagesMenuOperator/PengatruanHariCuti';
import { DataPengaturanHariKerja1 } from './PagesMenuOperator/DocsPengaturanCuti1';
import { DataPengaturanHariKerja2 } from './PagesMenuOperator/DocsPengaturanCuti2';
import KelolaLiburanNasional from './PagesMenuOperator/components/documents/KelolaLiburanNasional';
import { DataLiburNasional } from './PagesMenuOperator/DocsPengaturanLiburNasional';
import KelolaCutiBersama from './PagesMenuOperator/components/documents/KelolaCutiBersama';
import { DataCutiBersama } from './PagesMenuOperator/DocsPengaturanCutiBersama';
import PengaturanJenisCuti from './PagesMenuOperator/PengaturanJenisCuti';
import { DataPengaturanJenisCuti } from './PagesMenuOperator/DocsPengaturanJenisCuti';
import UbahDataJenisCuti from './PagesMenuOperator/components/documents/UbahDataJenisCuti';
import KelolaKuotaCuti from './PagesMenuOperator/KelolaKuotaCuti';
import { DataJenisCuti } from './PagesMenuOperator/DocsUbahJenisCuti';
import KelolaSubJenisCuti from './PagesMenuOperator/components/documents/KelolaSubJenisCuti';
import { DataSubJenisCuti } from './PagesMenuOperator/DocsUbahSubJenisCuti';
import { DataKuotaCuti1 } from './PagesMenuOperator/DocsKelolaKuotaCuti1';
import { DataKuotaCuti2 } from './PagesMenuOperator/DocsKelolaKuotaCuti2';
import DetailError from './PagesMenuOperator/components/documents/DetailError';
import { DataDetailError } from './PagesMenuOperator/DocsDetailError';
import DetailPengaturanPerUser from './PagesMenuOperator/components/documents/DetailPengaturanPerUser';
import { DataPengaturanUser } from './PagesMenuOperator/DocsPengaturanUser';

const Layout = () => {
    const location = useLocation();

    const sidebarConfig = location.pathname.startsWith("/menuoperator") ? CutiAdminSidebarConfig : CutiSidebarConfig;

    return (
        <Grid2 container minHeight={'100vh'} sx={{ backgroundColor:"#EEF0F7" }}>
            <Grid2 size={{ md: 3, lg: 3 }} sx={{alignItems: "start"}} >            
                <AppSidebar config={sidebarConfig}/>
            </Grid2>
            <Grid2 size={{ md: 9, lg: 9 }} maxHeight={'100%'}>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path='/dashboard' element={<Dashboard />} />

                    <Route path='/butuhpersetujuan' element={<ButuhPersetujuan />} />
                    <Route path='/disetujuianda' element={<DisetujuiAnda />} />
                    <Route path='/tidakdisetujuianda' element={<TidakDisetujuiAnda />} />
                    <Route path='/dikembalikananda' element={<DikembalikanAnda  />} />

                    <Route path='/draft' element={<Draft />} />
                    <Route path='/sedangdiproses' element={<SedangDiproses />} />
                    <Route path='/disetujui' element={<Disetujui />} />
                    <Route path='/tidakdisetujui' element={<TidakDisetujui />} />
                    
                    <Route path='/menuoperator/dashboard' element={<DashboardMenuOperator config={CardData} />} />
                    <Route path='/menuoperator/kelolaoperatorkkp' element={<KelolaOperatorKKP />} />
                    <Route path='/menuoperator/kelolaoperatorunitkerja' element={<KelolaOperatorUnitKerja config={DataOperatorUnitKerja} />} />
                    <Route path='/menuoperator/kelolaoperatorsatuankerja' element={<KelolaOperatorSatuanKerja config={DataOperatorUnitKerja} />} />
                    <Route path='/menuoperator/pengaturanjeniscuti' element={<PengaturanJenisCuti config={DataPengaturanJenisCuti}/>} />
                    <Route path='/menuoperator/pengaturanharicuti' element={<PengaturanHariCuti config1={DataPengaturanHariKerja1} config2={DataPengaturanHariKerja2} />}/>     
                    <Route path='/menuoperator/kelolakuotacuti' element={<KelolaKuotaCuti config1={DataKuotaCuti1} config2={DataKuotaCuti2} />} />
                    <Route path='/menuoperator/sedangproses' element={<SedangProses config={DataSedangProses} />} />
                    <Route path='/menuoperator/dokumencuti' element={<DokumenCuti config={DataDokumenCuti}/>}/>

                    <Route path='/menuoperator/pengaturanharicuti/kelolaliburannasional' element={<KelolaLiburanNasional config={DataLiburNasional} />}/>   
                    <Route path='/menuoperator/pengaturanharicuti/kelolacutibersama' element={<KelolaCutiBersama config= {DataCutiBersama} />}/> 
                    <Route path='/menuoperator/pengaturanjeniscuti/ubahdatajeniscuti' element={<UbahDataJenisCuti config= {DataJenisCuti} />} />
                    <Route path='/menuoperator/kelolaoperatorunitkerja/kelolaoperator' element={<KelolaOperator config1 = {DataOperatorKKPDitemukan} config2 = {DataOperatorKKPDitambahkan}/>} />
                    <Route path='/menuoperator/kelolaoperatorsatuankerja/kelolaoperator' element={<KelolaOperator config1 = {DataOperatorKKPDitemukan} config2 = {DataOperatorKKPDitambahkan}/>} />
                    <Route path='/menuoperator/kelolakuotacuti/detailerror' element={<DetailError config={DataDetailError}/>} />
                    <Route path='/menuoperator/kelolakuotacuti/detailpengaturanuser' element={<DetailPengaturanPerUser config={DataPengaturanUser}/>} />

                    <Route path='/menuoperator/pengaturanjeniscuti/ubahdatajeniscuti/kelolasubjeniscuti' element={<KelolaSubJenisCuti config= {DataSubJenisCuti} />} />

                    <Route path="/formpengajuancuti/cutitahunan" element={<CutiTahunan />} />
                    <Route path="/formpengajuancuti/cutiharibesar" element={<CutiHariBesar />} />
                    <Route path="/formpengajuancuti/cutisakit" element={<CutiSakit />} />
                    <Route path="/formpengajuancuti/cutimelahirkan" element={<CutiMelahirkan />} />
                    <Route path="/formpengajuancuti/cutialasanpenting" element={<CutiAlasanPenting />} />
                    <Route path="/formpengajuancuti/cutidiluartanggungannegara" element={<CutiDiluarTanggunganNegara />} />

                    <Route path="/butuhpersetujuan/detaildokumen" element={<DetailDokumen  />} />

                    <Route path='/sedangdiproses/detaildokumen' element={<DetailDokumen config={DataKomentarDiproses} tool={false}/>} />
                </Routes>
            </Grid2>
        </Grid2>
    )
}

export default Layout