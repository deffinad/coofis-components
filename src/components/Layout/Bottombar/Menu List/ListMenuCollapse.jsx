import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './ListMenuItem';
import * as MUIIcons from '@mui/icons-material';
import { Stack, Typography, Button, Popover } from '@mui/material';
import MenuGroup from './ListMenuGroup';

const ListMenuCollapse = ({ item, level }) => {
    let IconComponent = MUIIcons[item.icon];
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `menu-collapse-popover-${item.id}` : undefined;

    const buttonStyle = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        // padding: level > 1 ? 1 : '8px 16px',
        // paddingLeft: level > 2 ? level * 2 : '',
        justifyContent: 'space-between',
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
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
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
                    {item.children.map((childItem) => (
                        <React.Fragment key={childItem.id}>
                            {childItem.type === 'group' && <MenuGroup item={childItem} level={level + 1} />}
                            {childItem.type === 'collapse' && <ListMenuCollapse item={childItem} level={level + 1} />}
                            {childItem.type === 'item' && <MenuItem item={childItem} level={level + 1} />}
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
};

export default ListMenuCollapse;