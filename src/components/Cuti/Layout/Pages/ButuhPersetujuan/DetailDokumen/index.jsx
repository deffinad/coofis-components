import React from 'react';
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { Box, Grid2, Typography, Stack } from '@mui/material';
import { stylingConfig } from '../../../StylingConfig';

const DetailDokumen = ({scrollbar}) => {
    // const {id} = useParams(); #gunakan jika sudah ada backend
    const style = stylingConfig[0]
    
    // const location = useLocation();
    // const detailData = location.state?.detailData; // Ambil data lengkap dari state

    return (
        <Box p={4}>
            <Grid2 size = {{md: 8, lg: 8}}>
                <Stack direction= 'column'>
                    <Box sx = {{backgroundColor: 'white'}}>
                        <Stack direction= 'column'>
                            <Typography color= {style.primaryColor}>AWKOFJWJWAJFOJ </Typography>
                            <Grid2>

                            </Grid2>
                        </Stack>
                    </Box>
                </Stack>
            </Grid2>
            <Grid2 size = {{md: 4, lg: 4}}>
                <Stack direction= 'column'>
                    <Box>
                        <Typography>Status Dokumen Cuti</Typography>
                        
                    </Box>
                </Stack>
            </Grid2>
        </Box>
    )
}

export default DetailDokumen