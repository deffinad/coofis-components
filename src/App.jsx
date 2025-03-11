import { Grid2 } from '@mui/material'
import './App.css'
import Sidebar from './components/Layout/Sidebar'
import Navbar from './components/Layout/Navbar'

function App() {

  return (
    <Grid2 container height={'100%'}>
      <Grid2 size={{ md: 6, lg: 7 }} maxHeight={'100%'}>
        <Navbar />
      </Grid2>
    </Grid2>
  )
}

export default App
