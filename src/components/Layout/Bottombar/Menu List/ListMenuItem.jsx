import React from 'react';
import PropTypes from 'prop-types';
import * as MUIIcons from '@mui/icons-material';
import { Box, Stack, Typography, Button, Popover } from '@mui/material';

const ListMenuItem = ({ item, level, currentLang }) => {
    const { pathname } = window.location;
    const [anchorEl, setAnchorEl] = React.useState(null);

    let IconComponent = item.icon ? MUIIcons[item.icon] : null;

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };
    
    const handleClick = () => {
        if (item.clickable) {
            if (item.external_url) {
                window.open(item.external_url, '_blank');
            } else if (item.activePathname) {
                window.location.href = item.activePathname;
            }
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? `menu-item-popover-${item.id}-${item.lang}` : undefined;

    const buttonStyle = {
        cursor: item.clickable ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        padding: level > 1 ? 1 : '8px 16px',
        paddingLeft: level > 2 ? `${level * 8}px` : '',
        backgroundColor: pathname === item.activePathname ? '#333232a1' : 'transparent',
        textTransform: 'none',
        minWidth: 'unset',
        color: 'white',
        '&:hover': {
            backgroundColor: '#333232a1'
        }
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button 
                sx={buttonStyle} 
                aria-describedby={id}
                component="div"
                onClick={handleClick}
            >
                <Stack direction="row" gap={2} alignItems="center">
                    {IconComponent && <IconComponent />}
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
                    <Box 
                        component="div" 
                        className="menu-badge"
                        sx={{
                            backgroundColor: 'primary.main',
                            borderRadius: '10px',
                            padding: '2px 8px',
                            fontSize: '0.75rem',
                            marginLeft: 1
                        }}
                    >
                        {item.count}
                    </Box>
                )}
            </Button>

            {item.children && item.children.length > 0 && (
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
                        {item.children && item.children
                            .filter(child => child.lang === currentLang)
                            .map((childItem) => (
                                <ListMenuItem 
                                    key={`${childItem.id}-${childItem.lang}`} 
                                    item={childItem} 
                                    level={level + 1} 
                                    currentLang={currentLang}
                                />
                            ))
                        }
                    </Stack>
                </Popover>
            )}
        </div>
    );
};

ListMenuItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
    currentLang: PropTypes.string
};

export default ListMenuItem;