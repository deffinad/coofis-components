import React from "react"
import PropTypes from 'prop-types'
import { Stack, Typography, Box } from "@mui/material"
import GenerateTable from "@/components/Cuti/Layout/components/GenerateTable";
import SaveIcon from '@mui/icons-material/SaveOutlined';

const CardPengaturanHari = ({ config }) => {

    return (
        <Stack p={2.5} direction={'column'} spacing={1.5} sx={{ width:'100%', maxHeight:'100%', backgroundColor:'white', borderRadius:3}}>
            <Typography sx={{ fontFamily: style.fontFamily, color: style.primaryColor, fontWeight:700}}>Pengaturan Hari Kerja</Typography>
            <Typography sx={{ fontFamily: style.fontFamily, color: '#FF5630', fontSize:13, fontWeight:700}}>*Centang checkbox untuk menentukan hari libur dan pilih tombol "simpan"</Typography>
            <GenerateTable config={config}/>
            <Stack direction={'row'} justifyContent={'flex-end'}>
                <Box
                sx={{
                    backgroundColor: "#52BD94",
                    color: "white",
                    fontWeight: "600",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    display: "inline-flex",
                    cursor: "pointer",
                    width: "fit-content",
                    fontFamily: style.fontFamily,
                }}
                >
                    <SaveIcon sx={{fontSize:14, mr:0.4}} />
                    <Typography fontSize="11px" fontFamily={style.fontFamily}>
                        Simpan
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    )

}

CardPengaturanHari.propTypes = {
    config: PropTypes.object,
}

export default CardPengaturanHari