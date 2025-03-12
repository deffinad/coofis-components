import React, {useState} from 'react';
import { Stack, Typography, IconButton, Tooltip } from '@mui/material';
import * as MUIIcons from '@mui/icons-material';
import { navbarListConfig } from '../navbarLayoutConfig';

const CustomIcon = ({ menu }) => {
    const [imageError, setImageError] = useState(false);
    const IconComponent = MUIIcons[menu.icon] || MUIIcons['HelpOutline'];
  
    return !imageError && menu.image_icon ? (
      <img
        src={menu.image_icon}
        onError={() => setImageError(true)}
        width={24}
        height={24}
        alt="menu icon"
      />
    ) : (
      <IconComponent fontSize="medium" />
    );
  };

const Navbar = () => {

    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2, background: 'black', borderRadius:2}}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white', px: 2 }}>
                Navbar  
            </Typography>
            
            <Stack direction="row">
                {navbarListConfig.map((menu, index) => {
                    
                    if (menu.active) {
                        return menu.clickable && menu.type === 'external' ? (
                            <IconButton key={menu.id} title={menu.title} sx={{ color: 'white', '&:focus': { outline: 'none' }}} onClick={() => window.open(menu.external_url, '_blank')} >
                                <CustomIcon menu={menu} />
                            </IconButton>
                        ) : menu.clickable ? (
                            <IconButton key={menu.id} title={menu.title} arrow sx={{ color: 'white', '&:focus': { outline: 'none' }}} >
                                <CustomIcon menu={menu} />
                            </IconButton>
                        ) : (
                            <Tooltip key={menu.id} title={menu.title} arrow>
                                <span> 
                                    <IconButton disabled sx={{ '&.Mui-disabled': { color: 'white'} }}>
                                        <CustomIcon menu={menu} />
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