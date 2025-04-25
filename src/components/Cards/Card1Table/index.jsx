import React from "react"
import PropTypes from 'prop-types'
import { Box, Stack, Typography } from "@mui/material"
import { fontFamily, primaryColor } from "@/shared/AppConst"
import GenerateTable from "@/components/Cuti/Layout/components/GenerateTable"

const Card1Table = ({ title = '' ,table, searchbar }) => {

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            {title !== '' ? (
                <Typography sx = {{fontSize: '27px', fontFamily: fontFamily, color: primaryColor, fontWeight: '600'}}>{title}</Typography>
            ) : null}
            <Stack direction= 'column' style={{ padding: 5}} spacing={4}>
                {searchbar ? (
                    <Stack direction='row' justifyContent='space-between'>
                        <DropdownTampilkan value={10}></DropdownTampilkan>
                        <InputSearchBar></InputSearchBar>
                    </Stack>
                ) : null}
                <GenerateTable config={table} />
            </Stack>
        </Box>
    )
}

Card1Table.propTypes = {
    title: PropTypes.string,
    table: PropTypes.object,
    searchbar: PropTypes.bool,
}

export default Card1Table