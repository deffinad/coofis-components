import React from 'react';
import { Stack } from '@mui/material';
import { navbarListConfig } from '../../NavbarLayoutConfig';
import MenuDropdown from './menuDropdown';
import MenuItem from './menuItem';

const MenuList = ({lang}) => {
    return (
        <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
            {navbarListConfig.length > 0 && navbarListConfig.map((item) => (
                <>
                    {item.type === 'dropdown' && <MenuDropdown item={item} lang={lang} />}
                    {item.type === 'item' && <MenuItem item={item} lang={lang} />}
                </>
            ))}
        </Stack>
    )
}

export default MenuList;
