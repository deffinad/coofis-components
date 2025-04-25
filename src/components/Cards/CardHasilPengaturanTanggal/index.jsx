import React from "react"
import PropTypes from 'prop-types'
import { Stack, Typography, Box } from "@mui/material"
import GenerateTable from "@/components/Cuti/Layout/components/GenerateTable";
import PencilIcon from '@mui/icons-material/CreateOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const CardHasilPengaturanTanggal = ({ title, config }) => {

    return (
        <Stack p={2.5} direction={'column'} spacing={1.5} sx={{ width:'100%',  maxWidth: '100%', maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
            <Typography sx={{ fontFamily: style.fontFamily, color: style.primaryColor, fontWeight:700}}>{ title }</Typography>
            <Stack direction={'row'} justifyContent={'flex-end'}>
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
                    fontFamily: style.fontFamily,
                }}
                // onClick={() => navigate(`${location.pathname}/kelolaliburannasional`)}
                >
                    <PencilIcon sx={{fontSize:14, mr:0.4}} />
                    <Typography fontSize="11px" fontFamily={style.fontFamily}>
                        Ubah
                    </Typography>
                </Box>
            </Stack>
            <GenerateTable config={config}/>
        </Stack>
    )

}

CardHasilPengaturanTanggal.propTypes = {
    title: PropTypes.string,
    config: PropTypes.object,
}

export default CardHasilPengaturanTanggal