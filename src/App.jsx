import { Grid2 } from '@mui/material'
import './App.css'
import Sidebar from './components/Layout/Sidebar'
import Navbar from './components/Layout/Navbar'

function App() {

  return (
    <Grid2 container height={'100%'}>
      {/* <Grid2 size={{ md: 3, lg: 2 }} maxHeight={'100%'}>
        <Sidebar />
      </Grid2> */}
      <Grid2 size={{ md: 9, lg: 12 }} maxHeight={'100%'}>
        <Navbar />
      </Grid2>
    </Grid2>
  )
}

export default App
