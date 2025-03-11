import React from 'react';
import { Stack, Typography, IconButton, Tooltip } from '@mui/material';
import * as MUIIcons from '@mui/icons-material';
import { navbarListConfig } from '../navbarLayoutConfig';

const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%', background: 'black', padding: 2, borderRadius: 2 }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>
                Navbar  
            </Typography>
            
            <Stack direction="row" gap={2}>
                {navbarListConfig.map((menu, index) => {
                       const IconComponent = MUIIcons[menu.icon];
                    
                    if (menu.active) {
                        return menu.clickable && menu.type === 'external' ? (
                            <IconButton key={menu.id} sx={{ color: 'white' }} onClick={() => window.open(menu.external_url, '_blank')}>
                                <IconComponent fontSize='medium' />
                            </IconButton>
                        ) : menu.clickable ? (
                            <IconButton key={menu.id} sx={{ color: 'white' }}>
                                <IconComponent fontSize='medium' />
                            </IconButton>
                        ) : (
                            <Tooltip key={menu.id} title={menu.title} arrow>
                                <span> 
                                    <IconButton disabled sx={{ '&.Mui-disabled': { color: 'white'} }}>
                                        <IconComponent fontSize='medium' />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        );
                    }
                    
                })}
            </Stack>
        </Stack>
    );
};

export default Navbar;
