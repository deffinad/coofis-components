import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import * as MUIIcons from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

const MenuDropdown = ({ item, lang, stat }) => {
    const IconComponent = item.icon ? MUIIcons[item.icon] : null;
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const stackStyle = {
        cursor: 'pointer',
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '8px 16px',
        backgroundColor: hovered ? 'rgba(128, 128, 128, 0.3)' : 'transparent',
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: 'black',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    };

    return (
        <Box 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{ position: 'relative' }}
        >
            <Stack direction="row" sx={stackStyle}>
                <Stack direction="row" gap={2} alignItems="center">
                    {stat[0] && item.icon && IconComponent && <IconComponent size="medium" />}
                    <Stack direction="column">
                        {stat[1] && <Typography sx={{ color: 'white' }}>{item[`title_${lang}`]}</Typography>}
                        {stat[2] && <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>{item[`sub_title_${lang}`]}</Typography>}
                    </Stack>
                    {hovered ? <MUIIcons.ExpandLess /> : <MUIIcons.ExpandMore />}
                </Stack>
            </Stack>

            {hovered && item.children && item.children.length > 0 && (
                <Box sx={dropdownStyle}>
                    {item.children.map((child) => (
                        <>
                            {child.type === 'dropdown' && (
                                <MenuDropdown item={child} lang={lang} stat={[...stat.slice(0, 1), true, ...stat.slice(2)]}/>
                            )}
                            {child.type === 'item' && (
                                <MenuItem item={child} lang={lang} stat={[...stat.slice(0, 1), true, ...stat.slice(2)]}/>
                            )}
                        </>
                    ))}
                </Box>
            )}
        </Box>
    );
};

MenuDropdown.propTypes = {
    item: PropTypes.object
};

export default MenuDropdown;