import React, { Fragment } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { stylingConfig } from '../../StylingConfig'
import CustomAutocomplete from '../CustomAutocomplete'

const YangMenyetujui = ({config}) => {
const style = stylingConfig[0]

    return (
        <Box sx={{minHeight: config.some(item => item.opsi) ? '' : '300px', height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column'>
                <Box sx={{borderRadius: "2px 2px 0px 0px", backgroundColor: '#D6E0FF', paddingY: 2, paddingX: 3}}>
                    <Typography sx={{fontSize:'20px', color:'#1F3D99', fontFamily:style.fontFamily, fontWeight: '600'}}> Yang menyetujui </Typography>
                </Box>
                <Stack direction={'column'} sx={{paddingY: 2, paddingX: 2}} spacing={3}>
                    {config.map((item) => (
                        item.opsi ? (
                        <Fragment key={item.id}>
                            <CustomAutocomplete id={item.id} opsi={item.opsi} placeholder={item.placeholder}/>
                        </Fragment>   
                        ) : (
                        <Box key={item.id} backgroundColor='#F5F5F5'  sx={{paddingY: 0.8, paddingX: 0.5, borderRadius: 2}}>
                            <Typography sx={{fontSize:'10px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '700', lineHeight: 2}}>
                                [{item.id}] {item.nama} / {item.NIP} / {item.Jabatan}
                            </Typography>
                        </Box>
                        )
                    ))}
                </Stack>
            </Stack>
        </Box>
    )
}

export default YangMenyetujui