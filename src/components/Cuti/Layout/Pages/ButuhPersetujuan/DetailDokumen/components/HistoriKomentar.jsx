import React from 'react'
import { Box, Stack, Typography, Tooltip, Button } from '@mui/material'
import { stylingConfig } from '../../../../StylingConfig'
import { InputBase } from '@mui/material';
import * as MUIIcons from '@mui/icons-material'
import FemalePict from '../../../../../assets/Female Pict.svg'
import MalePict from '../../../../../assets/Male Pict.svg'
import CustomToolTip from '../../../../components/CustomToolTip';
import { DataKomentar } from '../DocsHistoriKomentar';

const HistoriKomentar = () => {
const style = stylingConfig[0]

const BoxStyle = (BackColor = 'white') => ({
    backgroundColor: BackColor,
    borderRadius: 2,
    color: 'white',
    fontSize: '11px',
    paddingX: 1,
    paddingY: 0.2,
    
});

const CommentBox = (width = '100%', height = '') => ({
    backgroundColor: 'white',
    border: '1px solid #C2C2C2',
    borderRadius: '6px',
    padding: '12px',
    minHeight: height,
    width: width,
    maxWidth: '100%',
    color: '#black',
    boxShadow: 'inset 1px 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    fontSize: '14px',
    fontFamily: style.fontFamily,
    fontWeight: '400',
    alignItems: 'flex-start',
    '& .MuiInputBase-input': {
        padding: 0,
        textAlign: 'start',
        height: '100%',
        boxSizing: 'border-box',
        lineHeight: '1.5',
        '&::placeholder': {
        color: '#757575',
        opacity: 1,
        },
    },
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
    position: 'relative'
});

const statusStyle = {
    Disetujui: {  background: "#52BD94" },
    Ditangguhkan: { background: "#FFB020" },
    Ditolak: { background: "#CB3A31" },
    'Mengajukan Cuti': { background: "#3366FF" },
  };

    return (
        <Box sx={{minHeight: '300px', height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column'>
                <Box sx={{borderRadius: "2px 2px 0px 0px", backgroundColor: '#D6E0FF', paddingY: 2, paddingX: 3}}>
                    <Typography sx={{fontSize:'20px', color:'#1F3D99', fontFamily:style.fontFamily, fontWeight: '700'}}> Histori Komentar </Typography>
                </Box>
                <Stack direction={'column'} sx={{paddingY: 2, paddingX: 2}} spacing={3} mr={3}>
                {DataKomentar.map((item, index) => (
                        <Stack key={item.id} direction={'row'} spacing={2}>
                            <Box
                                component="img"
                                src={item.gender === 'male' ? MalePict : FemalePict}
                                alt="Gambar"
                                sx={{ width: 80, height: 80, mt: -1.5, ml: 'auto' }}
                            />
                            <Stack direction={'column'} spacing={1}>
                                <Typography sx={{ fontSize: '15px', color: style.blackColor, fontFamily: style.fontFamily, fontWeight: '700' }}>
                                    {item.nama} / {item.NIP}
                                </Typography>
                                <Stack direction={'row'} spacing={1.2}>
                                    <Box sx={BoxStyle(statusStyle[item.status]?.background || 'gray')}>
                                        {item.status}
                                    </Box>
                                    <Typography
                                        component="span"
                                        fontSize={'12px'}
                                        fontFamily={style.fontFamily}
                                        sx={{
                                            color: "blue",
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            "&:hover": { textDecoration: "underline" },
                                        }}
                                    >
                                        (Lihat Dokumen)
                                    </Typography>
                                </Stack>
                                {/* Menampilkan komentar hanya jika pemohon false */}
                                {!item.pemohon && item.komentar && (
                                    <Box backgroundColor='#F5F5F5' sx={{ paddingY: 0, paddingX: 1, borderRadius: 1.5 }}>
                                        <Typography sx={{ fontSize: '13px', color: style.blackColor, fontFamily: style.fontFamily, fontWeight: '400' }}>
                                            {item.komentar}
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>
                        </Stack>
                    ))}
                    <InputBase multiline placeholder = 'Komentar' sx={ CommentBox( '100%', '89px' ) }/>
                    <Stack direction={'row'} spacing={2.5} alignItems={'center'} justifyContent={'space-between'}>
                        <InputBase placeholder='Masukan Passpharse' sx={ CommentBox( '75%' ) }/>
                        <CustomToolTip placeholder={'Preview'}>
                            <Box sx={ButtonBox('#3366FF', 'white')}>
                                <MUIIcons.RemoveRedEyeOutlined sx={{fontSize: '22px'}}/>
                            </Box>
                        </CustomToolTip>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default HistoriKomentar