import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      //Module Expose
      exposes: {
        './Ratings': './src/components/Ratings/index.jsx',
        './Inputs': './src/components/Inputs/index.js',
        './Components': './src/components/index.js',
        './ArsipCuti': './src/components/Cuti/Layout/Pages/Dashboard/components/ArsipCuti.jsx',
        './KuotaCutiSaatIni': './Cuti/Layout/Pages/Dashboard/components/KuotaCutiPerSaatIni',
        './ListDate': './Cuti/Layout/Pages/Dashboard/components/ListDate',
        './MonitoringKuota': './Cuti/Layout/Pages/Dashboard/components/MonitoringKuota',
        './StatusDokumenCutiDashboard': './Cuti/Layout/Pages/Dashboard/components/StatusDokumenCutiDashboard',
        './DisetujuiAnda': './Cuti/Layout/Pages/DisetujuiAnda',
        './ButuhPersetujuan': './Cuti/Layout/Pages/ButuhPersetujuan',
        './Draft' : './Cuti/Layout/Pages/Draft',
        './StatusDokumenCuti': './Cuti/Layout/components/Document/StatusDokumenCuti',
        './YangMenyetujui': './Cuti/Layout/components/Document/YangMenyetujui',
        './HistoriKomentar': './Cuti/Layout/components/Document/HistoriKomentar',
        './ProfilPegawai': './Cuti/Layout/components/Document/ProfilPegawai',
        './ToolButton': './Cuti/Layout/components/Document/ToolButton',
        './BackButtonBox': './Cuti/Layout/components/BackButton',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5174, // Make sure this matches your remote app port
    cors: true, // ✅ Enable CORS
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
