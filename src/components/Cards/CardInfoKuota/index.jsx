import React from "react"
import PropTypes from 'prop-types'
import { Stack, Typography } from "@mui/material"
import { fontFamily, blackColor } from "@/shared/AppConst"
import InfoKuota from "@/components/Cuti/Layout/Pages/FormPengajuanCuti/components/Info"

const CardInfoKuota = ({ title = '', infoKuota }) => {

    return (
        <Stack direction= 'column' spacing={4}>
            {title !== '' ? (
                <Typography sx={{fontStyle: 'italic',fontSize:'20px', color: blackColor, fontFamily: fontFamily, fontWeight: '600'}}> {title} </Typography>
            ) : null}          
            <InfoKuota config = {infoKuota} />
        </Stack>
    )
}

CardInfoKuota.propTypes = {
    title: PropTypes.string,
    infoKuota: PropTypes.object,
}

export default CardInfoKuota