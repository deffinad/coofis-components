import React from "react"
import PropTypes from 'prop-types'
import { Stack, Typography } from "@mui/material"
import { fontFamily, primaryColor } from "@/shared/AppConst"
import ListDate from "@/components/Cuti/Layout/Pages/Dashboard/components/ListDate"

const CardListDate = ({ config }) => {
    return (
        <Box minHeight={'100vh'}  backgroundColor= 'white' overflow= 'auto' sx ={{ boxShadow: '-5px 6px 8px rgba(0, 0, 0, 0.2)'}}  >
            <Stack direction='column' p={3} sx={{ ...scrollbar('#E0E0E0'), maxHeight:'100vh', overflow: "auto"}} >
                <Typography sx={{textAlign:'flex-start', fontSize: '17px', fontWeight: '700', fontFamily: fontFamily, color: primaryColor}}>Libur Nasional 2025</Typography>
                <ListDate config = { config } />
            </Stack>
        </Box>
    )
}

CardListDate.propTypes = {
    config: PropTypes.object,
}

export default CardListDate