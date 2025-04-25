import React from "react"
import PropTypes from 'prop-types'
import { Stack, Typography, Box } from "@mui/material"
import GenerateTable from "@/components/Cuti/Layout/components/GenerateTable";
import BackButtonBox from "@/components/Cuti/Layout/components/BackButton";
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomTextField from "@/components/Cuti/Layout/components/CustomTextField";

const CardPengaturanTanggal = ({ title, tahun, config }) => {

    return (
        <Box p = {3.5} sx={{mr:6}}>
            <Stack direction={'column'} p={3.5} sx={{ width:'100%', backgroundColor:'white', borderRadius:3}} spacing={2.5}>
                <Typography fontFamily={style.fontFamily} fontWeight={700} color={style.primaryColor} fontSize={20}> { title } </Typography>
                {tahun ? (
                    <Box>
                        <Typography fontFamily={style.fontFamily} fontWeight={400} color={style.primaryColor} fontSize={16} mb={0.8}>
                            Tahun Berlaku
                        </Typography>
                        <Stack direction={'row'} spacing={4}>
                            <CustomTextField padX={1} padY={0.5} numberOnly={true} fontSize={14} placeholder={'Contoh : 2022'}/>
                            <Box sx= {BoxStyle({backcolor: "#4C4DDC"})}>
                                Generate
                            </Box>
                        </Stack>
                    </Box>
                ) : null}
                <GenerateTable config={config}/>
                <Box sx= {BoxStyle({backcolor: "#3366FF"})}>
                    <AddIcon sx={{fontSize:16, mr:0.8}} />
                    <Typography fontSize='16px' fontFamily={style.fontFamily}>
                        Tambah Jenis Cuti
                    </Typography>
                    </Box>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                    <BackButtonBox />
                    <Box sx = {BoxStyle({backcolor: "#52BD94"})}>
                        <SaveIcon sx={{fontSize:16, mr:0.8}} />
                        <Typography fontSize='16px' fontFamily={style.fontFamily}>
                            Simpan
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )

}

CardPengaturanTanggal.propTypes = {
    title: PropTypes.string,
    tahun: PropTypes.bool,
    config: PropTypes.object,
}

export default CardPengaturanTanggal