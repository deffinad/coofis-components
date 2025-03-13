import React from 'react';
import PropTypes from 'prop-types';
import * as MUIIcons from '@mui/icons-material';
import { Box, Stack, Typography, Button, Popover } from '@mui/material';

const ListMenuItem = ({ item, level }) => {
    const { pathname } = window.location;
    const [anchorEl, setAnchorEl] = React.useState(null);

    let IconComponent = MUIIcons[item.icon];

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `menu-item-popover-${item.id}` : undefined;

    const buttonStyle = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        // padding: level > 1 ? 1 : '8px 16px',
        // paddingLeft: level > 2 ? level * 2 : '',
        backgroundColor: pathname === item.activePathname ? '#333232a1' : 'transparent',
        textTransform: 'none',
        minWidth: 'unset',
        color: 'white'
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button 
                sx={buttonStyle} 
                aria-describedby={id}
                component="div"
            >
                <Stack direction="row" gap={2} alignItems="center">
                    {item.icon && <IconComponent />}
                    <Stack direction="column">
                        <Typography sx={{ color: 'white', fontWeight: pathname === item.activePathname ? 600 : '' }}>
                            {item.title}
                        </Typography>
                        {item.sub_title && (
                            <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>
                                {item.sub_title}
                            </Typography>
                        )}
                    </Stack>
                </Stack>
                {item.count && (
                    <Box component="div" className="menu-badge">
                        {item.count}
                    </Box>
                )}
            </Button>

            {item.children && (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleMouseLeave}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    sx={{
                        '& .MuiPopover-paper': {
                            background: '#1e1e1e',
                            borderRadius: '10px',
                            mt: 1,
                            minWidth: 200,
                            pointerEvents: 'auto'
                        },
                        pointerEvents: 'none'
                    }}
                    disableRestoreFocus
                >
                    <Stack sx={{ p: 1 }} onMouseLeave={handleMouseLeave}>
                        {item.children && item.children.map((childItem) => (
                            <ListMenuItem key={childItem.id} item={childItem} level={level + 1} />
                        ))}
                    </Stack>
                </Popover>
            )}
        </div>
    );
};

ListMenuItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
};

export default ListMenuItem;