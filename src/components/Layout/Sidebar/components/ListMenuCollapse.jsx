/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListMenuItem from './ListMenuItem';
import * as MUIIcons from '@mui/icons-material';
import { Collapse, ListItem, Stack, Typography } from '@mui/material';
import ListMenuGroup from './ListMenuGroup';

const ListMenuCollapse = ({ item, level }) => {
    let IconComponent = MUIIcons[item.icon]
    const [opened, setOpened] = useState(false)

    const handleToggleMenu = () => {
        setOpened(prev => !prev)
    }

    const sxStyle = {
        cursor: 'pointer',
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        padding: level > 1 ? level : '',
        justifyContent: 'space-between',
    }

    return (
        <React.Fragment>
            <ListItem onClick={handleToggleMenu} sx={sxStyle}>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <IconComponent />
                        <Stack direction={'column'}>
                            <Typography sx={{ color: 'white', fontWeight: '' }}>{item.title}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                {opened ? <MUIIcons.ChevronRight /> : <MUIIcons.ExpandMore />}
            </ListItem>

            <Collapse in={opened}>
                {
                    item.children.map((item) => (
                        <React.Fragment key={item.id}>
                            {item.type === 'group' && <ListMenuGroup item={item} level={level + 1} />}
                            {item.type === 'collapse' && <ListMenuCollapse item={item} level={level + 1} />}
                            {item.type === 'item' && <ListMenuItem item={item} level={level + 1} />}
                        </React.Fragment>
                    ))
                }
            </Collapse>
        </React.Fragment>
    )
}

ListMenuCollapse.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
}

export default ListMenuCollapse