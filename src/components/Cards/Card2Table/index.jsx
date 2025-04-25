import React from "react"
import PropTypes from 'prop-types'
import { Box, Stack, Typography } from "@mui/material"
import { fontFamily, primaryColor } from "@/shared/AppConst"
import GenerateTable from "@/components/Cuti/Layout/components/GenerateTable"

const Card2Table = ({ title = '', tableTop, tableDown }) => {

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            {title !== '' ? (
                <Typography sx = {{fontSize: '27px', fontFamily: fontFamily, color: primaryColor, fontWeight: '600'}}>{title}</Typography>
            ) : null}
            <Stack direction= 'column' style={{ padding: 5}} spacing={4}> 
                <GenerateTable config={tableTop} />
                <GenerateTable config={tableDown} />
            </Stack>
        </Box>
    )
}

Card2Table.propTypes = {
    title: PropTypes.string,
    tableTop: PropTypes.object,
    tableDown: PropTypes.object,
}

export default Card2Table