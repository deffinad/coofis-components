import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import Pict from '../../../assets/Customer Service.svg'

const Header = () => {
    const style = stylingConfig[0]

    return (
        <>
            <Stack direction={'column'}>
                <Box 
                height={'150px'} 
                maxWidth={'100%'} 
                backgroundColor={'white'} 
                sx ={{ boxShadow: '5px 4px 8px rgba(0, 0, 0, 0.2), inset 5px 4px 6px rgba(0, 0, 0, 0.1)'}}  >
                    <Stack paddingRight={7} paddingLeft={7} direction={'row'} justifyContent={'space-between'}>
                        <Stack paddingTop={5} direction={'column'} spacing={1} >
                            <Typography sx ={{
                                fontSize: '24px', 
                                fontFamily: style.fontFamily, 
                                color:style.primaryColor, fontWeight:'700'
                                }}>Halo, 
                                <Typography component= 'span' sx={{
                                    fontSize: '24px', 
                                    fontFamily: style.fontFamily, 
                                    color: '#3366FF', fontWeight:'700'
                                    }}> Aulia Riza Farhan!</Typography></Typography>
                            <Typography sx ={{fontSize: '18px', fontFamily: style.fontFamily, color: '#757575', fontWeight:'600'}}>Selamat Datang di Aplikasi Cuti</Typography>
                        </Stack >
                        <Box
                        component="img"
                        src={Pict}
                        alt="Gambar"
                        sx={{ width: 180, height: 180, mt :-1.5, ml: 'auto'}}
                        />
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default Header