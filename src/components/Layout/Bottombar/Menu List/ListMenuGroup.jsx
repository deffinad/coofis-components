import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Popover, Button } from '@mui/material';
import ListMenuCollapse from './ListMenuCollapse';
import MenuItem from './ListMenuItem';

const ListMenuGroup = ({ item, level, currentLang }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `menu-group-popover-${item.id}-${item.lang}` : undefined;

    const buttonStyle = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        padding: level > 1 ? 1 : '8px 16px',
        textTransform: 'none',
        minWidth: 'unset',
        color: 'white',
        '&:hover': {
            backgroundColor: '#333232a1'
        }
    };

    // Filter children by current language
    const filteredChildren = item.children 
        ? item.children.filter(child => child.lang === currentLang || !child.lang)
        : [];

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{paddingTop: '10px'}}>
            <Button 
                sx={buttonStyle} 
                aria-describedby={id}
                component="div"
            >
                <Typography sx={{ color: 'white', fontWeight: 600 }}>{item.title}</Typography>
            </Button>

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
                    <Typography sx={{ color: 'white', fontWeight: 600, px: 2, py: 1 }}>{item.title}</Typography>
                    
                    {filteredChildren.map((childItem) => (
                        <React.Fragment key={`${childItem.id}-${childItem.lang}`}>
                            {childItem.type === 'group' && 
                                <ListMenuGroup item={childItem} level={level + 1} currentLang={currentLang} />
                            }
                            {childItem.type === 'collapse' && 
                                <ListMenuCollapse item={childItem} level={level + 1} currentLang={currentLang} />
                            }
                            {childItem.type === 'item' && 
                                <MenuItem item={childItem} level={level + 1} currentLang={currentLang} />
                            }
                        </React.Fragment>
                    ))}
                </Stack>
            </Popover>
        </div>
    );
};

ListMenuGroup.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
};

export default ListMenuGroup;