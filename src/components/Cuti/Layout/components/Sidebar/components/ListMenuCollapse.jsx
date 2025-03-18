import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListMenuItem from './ListMenuItem';
import * as MUIIcons from '@mui/icons-material';
import { Box, Collapse, ListItem, Stack, Typography } from '@mui/material';
import ListMenuGroup from './ListMenuGroup';
import { stylingConfig } from '../../../StylingConfig';

const ListMenuCollapse = ({ item, level, selectedItem, setSelectedItem }) => {
    let IconComponent = MUIIcons[item.icon]
    const [opened, setOpened] = useState(false)
    const [selected, setSelected] = useState(false)
    const style = stylingConfig[0]

    const handleToggleMenu = () => {
        setOpened(prev => !prev);
        setSelectedItem(item.id);
    }

    const sxStyle = {
        cursor: 'pointer',
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        color: '#616161',
        padding: level > 1 ? 1 : '',
        paddingLeft: level > 2 ? level * 2 : '',
        justifyContent: 'space-between'
    }

    return (
        <React.Fragment>
            <Box sx={{backgroundColor: selected ? style.selected : 'transparent', borderRadius: '8px'}}>
                <ListItem onClick={() => (handleToggleMenu(), setSelected(!selected))} sx={sxStyle}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            {item.icon && <IconComponent sx={{ fontSize: '16px', color: selected ? style.redColor : style.primaryColor}}/>}
                            <Stack direction={'column'}>
                                <Typography fontSize='16px' sx={{ color: selected ? style.redColor : style.primaryColor, fontFamily: style.fontFamily }}>{item.title}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    {opened ? <MUIIcons.ExpandLess sx = {{color: style.redColor}}/> : <MUIIcons.ExpandMore />}
                </ListItem>

                <Collapse in={opened}>
                    {
                        item.children.map((item) => (
                            <React.Fragment key={item.id}>
                                {item.type === 'group' && <ListMenuGroup item={item} level={level + 1} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
                                {item.type === 'collapse' && <ListMenuCollapse item={item} level={level + 1} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
                                {item.type === 'item' && <ListMenuItem item={item} level={level + 1} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
                            </React.Fragment>
                        ))
                    }
                </Collapse>
            </Box>
        </React.Fragment>
    )
}

ListMenuCollapse.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
    selectedItem: PropTypes.string,
    setSelectedItem: PropTypes.func,
};

export default ListMenuCollapse