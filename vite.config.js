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
        './Components': './src/components/index.js',
        './ArsipCuti': './src/components/Cuti/Layout/Pages/Dashboard/components/ArsipCuti.jsx',
        './KuotaCutiSaatIni': './src/components/Cuti/Layout/Pages/Dashboard/components/KuotaCutiPerSaatIni.jsx',
        './ListDate': './src/components/Cuti/Layout/Pages/Dashboard/components/ListDate',
        './MonitoringKuota': './src/components/Cuti/Layout/Pages/Dashboard/components/MonitoringKuota',
        './StatusDokumenCutiDashboard': './src/components/Cuti/Layout/Pages/Dashboard/components/StatusDokumenCutiDashboard',
        './DisetujuiAnda': './src/components/Cuti/Layout/Pages/DisetujuiAnda',
        './ButuhPersetujuan': './src/components/Cuti/Layout/Pages/ButuhPersetujuan',
        './Draft' : './src/components/Cuti/Layout/Pages/Draft',
        './StatusDokumenCuti': './src/components/Cuti/Layout/components/Document/StatusDokumenCuti',
        './YangMenyetujui': './src/components/Cuti/Layout/components/Document/YangMenyetujui',
        './HistoriKomentar': './src/components/Cuti/Layout/components/Document/HistoriKomentar',
        './ProfilPegawai': './src/components/Cuti/Layout/components/Document/ProfilPegawai',
        './ToolButton': './src/components/Cuti/Layout/components/Document/ToolButton',
        './BackButtonBox': './src/components/Cuti/Layout/components/BackButton',
        './Navbar': '/src/components/Navbar/index.jsx',
        './Input': '/src/components/Input/index.jsx',
        './Layout': '/src/components/Layout/index.js',
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
