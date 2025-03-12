    import React, { useState } from 'react';
    import PropTypes from 'prop-types';
    import * as MUIIcons from '@mui/icons-material';
    import { Box, Stack, Typography } from '@mui/material';

    const MenuItem = ({ item, lang }) => {
        const { pathname } = window.location;
        const IconComponent = item.icon ? MUIIcons[item.icon] : null;
        const [hovered, setHovered] = useState(false);

        const handleMouseEnter = () => {
            setHovered(true);
        };

        const handleMouseLeave = () => {
            setHovered(false);
        };

        const handleClick = () => {
            if (item.linktype === 'external' && item.external_url) {
                window.open(item.external_url, '_blank');
            }
        };

        const stackStyle = {
            cursor: item.clickable ? 'pointer' : 'default',
            direction: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '10px',
            padding: '8px 16px',
            backgroundColor: hovered ? 'rgba(128, 128, 128, 0.3)' : 'transparent',
        };

        return (
            <Stack direction="row" sx={stackStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <Stack direction="row" gap={2} alignItems="center">
                    {item.icon && IconComponent && <IconComponent size="medium" />}
                    <Stack direction="column">
                        <Typography sx={{ color: 'white', fontWeight: pathname === item.external_url ? 600 : '' }}>
                            {item[`title_${lang}`]}
                        </Typography>
                        {item[`sub_title_${lang}`] && <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>
                            {item[`sub_title_${lang}`]}
                        </Typography>}
                    </Stack>
                </Stack>
                {item.count && 
                    <Box component='div' className='menu-badge'>
                        {item.count}
                    </Box>
                }
            </Stack>
        );
    };

    MenuItem.propTypes = {
        item: PropTypes.object,
    };

    export default MenuItem;