import React from 'react'
import PropTypes from 'prop-types'
import { Box, Stack, Typography, Grid2 } from '@mui/material'
import { primaryColor, fontFamily, blackColor } from '@/shared/AppConst'
import CustomTextField from '@/components/Cuti/Layout/components/CustomTextField'

const CardProfilPegawai = ({ nama, nip, golongan, jabatan, unitKerja }) => {
    const FontStyle = {
        color: primaryColor,
        fontFamily: fontFamily,
        fontWeight: '400'
    };

    return (
        <Box sx={{ height: '100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)' }}>
            <Stack direction='column' spacing={2} paddingBottom={6}>
                <Box sx={{ borderRadius: "2px 2px 0px 0px", backgroundColor: '#F5F5F5', paddingY: 2, paddingX: 3 }}>
                    <Typography sx={{ fontSize: '20px', color: blackColor, fontFamily: fontFamily, fontWeight: '700' }}>
                        Profil Pegawai
                    </Typography>
                </Box>
                <Grid2 container spacing={2.5} paddingTop={2}>
                    <Grid2 paddingLeft={1} size={{ md: 2.5, lg: 2.5 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2.2 }}>
                        <Typography sx={FontStyle}>Nama</Typography>
                        <Typography sx={FontStyle}>Golongan</Typography>
                        <Typography sx={FontStyle}>Unit Kerja</Typography>
                        <Typography sx={FontStyle}>Periode Cuti</Typography>
                        <Typography sx={{ ...FontStyle, mb: 2.8 }}>Alamat Cuti</Typography>
                        <Typography sx={FontStyle}>No Telepon</Typography>
                        <Typography sx={{ ...FontStyle, mb: 2.8 }}>Alasan Cuti</Typography>
                        <Typography sx={FontStyle}>Kota</Typography>
                    </Grid2>
                    <Grid2 size={{ md: 9.5, lg: 9.5 }} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Stack direction={'column'} spacing={1.7} mr={4}>
                            <Stack direction="row" spacing={2} alignItems="center" justifyContent='space-between'>
                                <CustomTextField disabled placeholder={nama} width='46%' />
                                <Typography sx={FontStyle}>NIP</Typography>
                                <CustomTextField disabled placeholder={nip} width='36%' />
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems="center" justifyContent='space-between'>
                                <CustomTextField disabled placeholder={golongan} width='35%' />
                                <Typography sx={FontStyle}>Jabatan</Typography>
                                <CustomTextField disabled placeholder={jabatan} width='48%' />
                            </Stack>
                            <CustomTextField disabled placeholder={unitKerja} width='99.7%' />
                            <Stack direction='row' justifyContent='space-between'>
                                <CustomTextField placeholder="Pilih tanggal mulai dan berakhir" width='40%' />
                                <Typography sx={FontStyle}>Durasi Cuti</Typography>
                                <CustomTextField disabled placeholder="2 Hari" width='25%' />
                            </Stack>
                            <CustomTextField placeholder="Silakan masukan alamat cuti Saudara sebagai catatan" width='99.7%' height='50px' />
                            <CustomTextField placeholder="Silakan masukan no telepon Saudara" width='99.7%' />
                            <CustomTextField placeholder="Silakan masukan alasan Saudara sebagai catatan" width='99.7%' height='50px' />
                            <CustomTextField placeholder="Kota di surat cuti" width='99.7%' />
                        </Stack>
                    </Grid2>
                </Grid2>
            </Stack>
        </Box>
    )
}

CardProfilPegawai.propTypes = {
    nama: PropTypes.string,
    nip: PropTypes.string,
    golongan: PropTypes.string,
    jabatan: PropTypes.string,
    unitKerja: PropTypes.string,
}

export default CardProfilPegawai
