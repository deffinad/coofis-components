import React, { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography, Menu, MenuItem } from '@mui/material';
import * as MUIIcons from '@mui/icons-material';
import { menuListConfig } from '../../menuLayoutConfig';

const ListMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeMenuId, setActiveMenuId] = useState(null);
    
    const menuRefs = useRef({});
    
    const handleMouseEnter = (event, menuId) => {
        setAnchorEl(event.currentTarget);
        setActiveMenuId(menuId);
    };
    
    const handleMouseLeave = () => {
        setTimeout(() => {
            const menuRef = menuRefs.current[activeMenuId];
            const menuElement = document.getElementById(`menu-${activeMenuId}`);
            
            if (!menuRef?.contains(document.activeElement) && 
                !menuElement?.contains(document.activeElement)) {
                setAnchorEl(null);
                setActiveMenuId(null);
            }
        }, 100);
    };
    
    const dropdownRef = useRef(null);
    
    const handleDropdownMouseLeave = () => {
        setAnchorEl(null);
        setActiveMenuId(null);
    };

    return (
        <Stack flex={1} px={2} pb={2} direction={'row'} justifyContent={'space-around'}>
            {menuListConfig.map((menu, index) => {
                const IconComponent = MUIIcons[menu.icon];
                
                if (!menuRefs.current[menu.id]) {
                    menuRefs.current[menu.id] = React.createRef();
                }
                
                return (
                    <Stack
                        key={menu.id}
                        py={1}
                        px={2}
                        direction={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={2}
                        ref={menuRefs.current[menu.id]}
                        sx={{
                            borderRadius: '10px',
                            cursor: 'pointer',
                            ':hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                        onMouseEnter={(e) => menu.type === 'parent' ? handleMouseEnter(e, menu.id) : null}
                        onMouseLeave={menu.type === 'parent' ? handleMouseLeave : null}
                    >
                        <IconComponent fontSize='medium' sx={{ color: 'white' }} />
                        <Stack direction={"column"}>
                        <Typography
                            sx={{
                                color: 'white',
                                fontWeight: index === 0 ? 600 : '',
                                cursor: 'pointer',
                            }}
                        >
                            {menu.title}
                        </Typography>
                        {menu.sub_title && (
                            <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>{menu.sub_title}</Typography>
                        )}
                        </Stack>   
                        {menu.type === 'parent' && (
                            <Menu
                                id={`menu-${menu.id}`}
                                ref={dropdownRef}
                                anchorEl={activeMenuId === menu.id ? anchorEl : null}
                                open={activeMenuId === menu.id}
                                onClose={() => {
                                    setAnchorEl(null);
                                    setActiveMenuId(null);
                                }}
                                MenuListProps={{
                                    onMouseLeave: handleDropdownMouseLeave,
                                    style: { pointerEvents: 'auto' }
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                slotProps={{
                                    paper: {
                                        sx: {
                                            marginBottom: '8px',
                                            pointerEvents: 'auto'
                                        }
                                    }
                                }}
                                disablePortal
                            >
                                {menu.children.map((child) => {
                                    const ChildIconComponent = MUIIcons[child.icon || menu.icon];
                                    return (
                                        <MenuItem 
                                            key={child.id} 
                                            onClick={() => {
                                                setAnchorEl(null);
                                                setActiveMenuId(null);
                                            }}
                                        >
                                            <Stack direction={'row'} alignItems={'center'} gap={2}>
                                                <ChildIconComponent fontSize='medium' sx={{ color: 'black' }} />
                                                <Typography sx={{ color: 'black' }}>{child.title}</Typography>
                                            </Stack>
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        )}
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default ListMenu;