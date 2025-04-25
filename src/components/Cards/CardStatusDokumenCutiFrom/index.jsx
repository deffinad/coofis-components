import React from "react"
import PropTypes from 'prop-types'
import { Box, Stack, Typography } from "@mui/material"
import { fontFamily, blackColor } from "@/shared/AppConst"

const CardStatusDokumenCutiForm = ({ config }) => {
    const FontStyle = {
        color: primaryColor,
        fontFamily: fontFamily, 
        fontWeight: '400'
    };
    
    const BoxColor = (backcolor = 'white', fontcolor = 'black') => ({
        width: 'fit-content',
        backgroundColor: backcolor,
        color: fontcolor,
        paddingX: 1.5,
        borderRadius: 5,
        fontWeight: '400'
    });

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', paddingBottom: 5, paddingTop: 2, paddingX: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column' spacing={3.5}>
                <Typography sx={{fontSize:'20px', color:blackColor, fontFamily:fontFamily, fontWeight: '700'}}>Status Dokumen Cuti </Typography>
                {config.length > 0 && (
                    <Grid2 container spacing={3}>
                        <Grid2 item md={2.8} lg={2.8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1.5 }}>
                            {config.map((item) => (
                                <Typography key={item.id} sx={{ ...FontStyle, paddingY : item.opsi ? 1 : 0 }}>
                                    {item.title}:
                                </Typography>
                            ))}
                        </Grid2>

                        <Grid2 item md={9.2} lg={9.2} sx={{ display: 'flex', flexDirection: 'column', gap: 1.65}}>
                            {config.map((item) => (
                                item.opsi ? (
                                    <CustomAutocomplete key= {item.id} id = {item.id} opsi={item.opsi} placeholder={item.placeholder}/>
                                ) : item.Box ? (
                                    <Box key={item.id} sx={BoxColor(item.backColor, item.fontColor)} >
                                        {item.isi}
                                    </Box>
                                ) : (
                                    <Typography key={item.id} color="black">
                                        {item.isi}
                                    </Typography>
                                )
                            ))}
                        </Grid2>
                    </Grid2>
                )}
            </Stack>
        </Box>
    )
}

CardStatusDokumenCutiForm.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
}

export default CardStatusDokumenCutiForm