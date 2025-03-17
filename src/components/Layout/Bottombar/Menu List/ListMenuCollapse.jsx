import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './ListMenuItem';
import * as MUIIcons from '@mui/icons-material';
import { Stack, Typography, Button, Popover } from '@mui/material';
import MenuGroup from './ListMenuGroup';

const ListMenuCollapse = ({ item, level, currentLang }) => {
    let IconComponent = item.icon ? MUIIcons[item.icon] : null;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `menu-collapse-popover-${item.id}-${item.lang}` : undefined;

    const buttonStyle = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        padding: level > 1 ? 1 : '8px 16px',
        paddingLeft: level > 2 ? `${level * 8}px` : '',
        justifyContent: 'space-between',
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button 
                sx={buttonStyle} 
                aria-describedby={id}
                component="div"
            >
                <Stack direction="row" gap={2} alignItems="center">
                    {IconComponent && <IconComponent />}
                    <Typography sx={{ color: 'white' }}>{item.title}</Typography>
                </Stack>
                {open ? <MUIIcons.ChevronRight /> : <MUIIcons.ExpandMore />}
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
                    {filteredChildren.map((childItem) => (
                        <React.Fragment key={`${childItem.id}-${childItem.lang}`}>
                            {childItem.type === 'group' && 
                                <MenuGroup item={childItem} level={level + 1} currentLang={currentLang} />
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

ListMenuCollapse.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
    currentLang: PropTypes.string
};

export default ListMenuCollapse;