import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FemalePict from '../../Cuti/assets/Female Pict.svg';
import MalePict from '../../Cuti/assets/Male Pict.svg';
import CustomToolTip from '@/components/Cuti/Layout/components/CustomToolTip';
import CustomTextField from '@/components/Cuti/Layout/components/CustomTextField';
import { fontFamily, blackColor } from '@/shared/AppConst';

const CardHistoriKomentar = ({config}) => {

    const BoxStyle = (BackColor = 'white', color = 'white') => ({
        backgroundColor: BackColor,
        borderRadius: 2,
        color: color,
        fontSize: '11px',
        paddingX: 1,
        paddingY: 0.2,
    });

    const ButtonBox = (BackColor = 'white', color = 'white') => ({
        backgroundColor: BackColor,
        borderRadius: 1000,
        color: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 37,
        height: 37,
        cursor: 'pointer',
        position: 'relative',
    });

    const statusStyle = {
        Disetujui: { background: "#52BD94" },
        Ditangguhkan: { background: "#FFB020" },
        Ditolak: { background: "#CB3A31" },
        'Mengajukan Cuti': { background: "#3366FF" },
        'Simpan Draft': { background: "#D8DAE5", color: '#474D66' },
    };

    return (
        <Box sx={{ height: '100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)' }}>
            <Stack direction='column'>
                <Box sx={{ borderRadius: "2px 2px 0px 0px", backgroundColor: '#474D66', paddingY: 2, paddingX: 3 }}>
                    <Typography sx={{ fontSize: '20px', fontFamily: fontFamily, fontWeight: '600' }}>
                        Histori Komentar
                    </Typography>
                </Box>
                <Stack direction={'column'} sx={{ paddingY: 2, paddingX: 2 }} spacing={3} mr={3}>
                    {config.length > 0 && config[0].listKomentar.map((item) => (
                        <Stack key={item.id} direction={'row'} spacing={2}>
                            <Box
                                component="img"
                                src={item.gender === 'male' ? MalePict : FemalePict}
                                alt="Gambar"
                                sx={{ width: 80, height: 80, mt: -1.5, ml: 'auto' }}
                            />
                            <Stack direction={'column'} spacing={1}>
                                <Typography sx={{ fontSize: '15px', color: blackColor, fontFamily: fontFamily, fontWeight: '700' }}>
                                    {item.nama} / {item.NIP}
                                </Typography>
                                <Stack direction={'row'} spacing={1.2}>
                                    <Box sx={BoxStyle(statusStyle[item.status]?.background || 'gray', statusStyle[item.status]?.color)}>
                                        {item.status}
                                    </Box>
                                    {!config[0].draft && (
                                        <Typography
                                            component="span"
                                            fontSize={'12px'}
                                            fontFamily={fontFamily}
                                            sx={{
                                                color: "blue",
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                "&:hover": { textDecoration: "underline" },
                                            }}
                                        >
                                            (Lihat Dokumen)
                                        </Typography>
                                    )}
                                </Stack>
                                {!item.pemohon && item.komentar && (
                                    <Box backgroundColor='#F5F5F5' sx={{ paddingY: 0, paddingX: 1, borderRadius: 1.5 }}>
                                        <Typography sx={{ fontSize: '13px', color: blackColor, fontFamily: fontFamily, fontWeight: '400' }}>
                                            {item.komentar}
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>
                        </Stack>
                    ))}
    
                    {config.length > 0 && !config[0].draft && (
                        <>
                            <CustomTextField placeholder='Komentar' width='100%' height='89px' padX={1.3} padY={1.4} fontSize='14px' />
                            {!config[0].pembatalan && (
                                <Stack direction={'row'} spacing={2.5} alignItems={'center'} justifyContent={'space-between'}>
                                    <CustomTextField placeholder='Masukan Passpharse' width='75%' padX={1.3} padY={1} fontSize='14px' />
                                    <CustomToolTip placeholder={'Preview'}>
                                        <Box sx={ButtonBox('#3366FF', 'white')}>
                                            <EyeIcon sx={{ fontSize: '22px' }} />
                                        </Box>
                                    </CustomToolTip>
                                </Stack>
                            )}
                        </>
                    )}
                </Stack>
            </Stack>
        </Box>
    );    
};

CardHistoriKomentar.propTypes = {
    config: PropTypes.object
}

export default CardHistoriKomentar