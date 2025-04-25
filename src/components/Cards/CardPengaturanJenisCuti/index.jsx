import React from 'react';
import PropTypes from 'prop-types'
import { Stack, Typography, Box } from '@mui/material';
import DropdownTampilkan from '@/components/Cuti/Layout/components/Tampilkan';
import InputSearchBar from '@/components/Input/InputSearchBar';
import GenerateTable from '@/components/Cuti/Layout/components/GenerateTable';
import { fontFamily } from '@/shared/AppConst';
import PencilIcon from '@mui/icons-material/CreateOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const CardPengaturanJenisCuti = ({config}) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Box p={4}>
            <Box sx={{ maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
                <Stack p = {4} direction='column' spacing = {2}>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                        <Typography fontFamily={fontFamily} color='black' fontWeight={'700'} fontSize={20}>Pengaturan Jenis Cuti</Typography>
                        <Box
                            sx={{
                                backgroundColor: "#3366FF",
                                color: "white",
                                fontWeight: "600",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                display: "inline-flex",
                                cursor: "pointer",
                                width: "fit-content",
                                fontFamily: fontFamily,
                                alignItems: 'center',
                                height: 'fit-content'
                            }}
                            // onClick={() => navigate(`${location.pathname}/ubahdatajeniscuti`)}
                            >
                                <PencilIcon sx={{fontSize:12, mr:0.4}} />
                                <Typography fontSize="12px" fontFamily={fontFamily}>
                                    Ubah Data Jenis Cuti
                                </Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between'>
                        <DropdownTampilkan value={10}></DropdownTampilkan>
                        <InputSearchBar></InputSearchBar>
                    </Stack>
                    <GenerateTable config={config}/>
                </Stack>
            </Box>
        </Box>
    )
}

CardPengaturanJenisCuti.propTypes = {
    config: PropTypes.object,
}

export default CardPengaturanJenisCuti