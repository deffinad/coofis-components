/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import * as MUIIcons from '@mui/icons-material';
import { Box, ListItem, Stack, Typography } from '@mui/material'

const ListMenuItem = ({ item, level }) => {
    const { pathname } = window.location

    let IconComponent = MUIIcons[item.icon]

    const sxStyle = {
        cursor: 'pointer',
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        padding: level > 1 ? 2 : '',
        paddingLeft: level > 1 ? level + 1 : '',
        background: pathname === item.activePathname ? '#333232a1' : ''
    }

    return (
        <ListItem sx={sxStyle}>
            <Stack direction={'row'} gap={2} alignItems={'center'}>
                <IconComponent />
                <Stack direction={'column'}>
                    <Typography sx={{ color: 'white', fontWeight: pathname === item.activePathname ? 600 : '' }}>{item.title}</Typography>
                    {item.sub_title && <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>{item.sub_title}</Typography>}
                </Stack>
            </Stack>
            {item.count &&
                <Box component='div' className='menu-badge'>
                    {item.count}
                </Box>
            }
        </ListItem>
    )
}

ListMenuItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
}

export default ListMenuItem
