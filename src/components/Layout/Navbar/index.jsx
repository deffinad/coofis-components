import React from 'react';
import { Stack, Typography, IconButton } from '@mui/material';
import * as MUIIcons from '@mui/icons-material';
import { navbarListConfig } from '../navbarLayoutConfig';

const Navbar = () => {
    return (
        <Stack 
            direction="row" 
            alignItems="center" 
            justifyContent="space-between" 
            sx={{ background: 'black', padding: 2, borderRadius: 2 }}
        >
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>
                App Title
            </Typography>
            
            <Stack direction="row" gap={2}>
                {navbarListConfig.map((item) => {
                    const IconComponent = MUIIcons[item.icon] || MUIIcons.HelpOutline; // Default jika ikon tidak ditemukan
                    return (
                        <IconButton key={item.id} sx={{ color: 'white' }}>
                            <IconComponent fontSize='medium' />
                        </IconButton>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default Navbar;
