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
        './Inputs': '/src/components/Inputs/index.js',
        './Menu': '/src/components/Menu/index.js',
        './Components': '/src/components/index.js',
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
