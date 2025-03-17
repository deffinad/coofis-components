import { Grid2 } from '@mui/material'
import React, {useState} from 'react'
import './App.css'
import Layout from './components/Cuti/Layout'
import Sidebar from './components/Layout/Sidebar'
import Navbar from './components/Layout/Navbar'
import Showcase from './components/Layout/ShowcaseButton/showcase'
import { BrowserRouter } from 'react-router-dom'

function App() {
// const [style, setStyle] = useState("flex-start");
// const [titleStat, setTitleStat] = useState(true);
// const [subtitleStat, setSubtitleStat] = useState(true);
// const [iconStat, setIconStat] = useState(true);

// const stat = [titleStat, subtitleStat, iconStat];

  return (
    // <Grid2 container height={'100%'}>
    //   <Grid2 size={{ md: 3, lg: 2 }} maxHeight={'100%'}>
    //     <Sidebar />
    //   </Grid2>
    //   <Grid2 size={{ md: 9, lg: 12 }} maxHeight={'100%'}>
    //     <Navbar menuStyle={style} stat = {stat}/>
    //   </Grid2>
    //   <Grid2 size={{ md: 12, lg: 12 }} maxHeight={'100%'} sx ={{ position: 'absolute', bottom: 10, right: 10}}>
    //   <Showcase 
    //     titleStat={titleStat} setTitleStat={setTitleStat}
    //     subtitleStat={subtitleStat} setSubtitleStat={setSubtitleStat}
    //     iconStat={iconStat} setIconStat={setIconStat}
    //     style={style} setStyle={setStyle}
    //   /> 
    //   </Grid2>
    // </Grid2>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App