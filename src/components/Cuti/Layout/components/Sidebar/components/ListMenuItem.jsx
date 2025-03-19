import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as MUIIcons from '@mui/icons-material';
import { Box, ListItem, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { stylingConfig } from '../../../StylingConfig';

const ListMenuItem = ({ item, level, selectedItem, setSelectedItem, parentSelected }) => {
    const style = stylingConfig[0];
    let IconComponent = MUIIcons[item.icon];

    // Cek apakah item ini yang terpilih
    const isSelected = selectedItem === item.title;

    const sxStyle = {
        cursor: 'pointer',
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        color: style.primaryColor,
        padding: level > 1 ? 1 : '',
        paddingLeft: level > 2 ? level * 1 : '',
        background: isSelected ? style.selectedChild : parentSelected ? style.selected : 'transparent',
        height: 35,
        mb: 1
    };

    const formatLink = (title) => `/${title.toLowerCase().replace(/\s+/g, '')}`;
    
    return (
        <ListItem
            sx={sxStyle}
            onClick={() => {
                if (!isSelected) {
                    setSelectedItem(item.title);
                }
            }}
        >
            <Link to={formatLink(item.title)} style={{ textDecoration: 'none', width: '100%' }}>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    {item.icon && <IconComponent sx={{ fontSize: '16px', color: isSelected ? style.redColor : style.primaryColor }} />}
                    <Stack direction={'column'}>
                        <Typography sx={{ fontSize: '16px', fontFamily: style.fontFamily, color: isSelected ? style.redColor : style.primaryColor, fontWeight: '400' }}>{item.title}</Typography>
                    </Stack>
                </Stack>
            </Link>
            {item.count && (
                <Box component='div' className='menu-badge' color='white' textAlign='center' alignContent='center' fontSize='10px' width='18px' height='18px' borderRadius={15} sx={{ backgroundColor: style.redColor, fontFamily: style.fontFamily }}>
                    {item.count}
                </Box>
            )}
        </ListItem>
    );
};

ListMenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired,
    selectedItem: PropTypes.string.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
    parentSelected: PropTypes.bool
};


export default ListMenuItem;
