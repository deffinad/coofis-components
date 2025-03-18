import React from 'react';
import { Stack } from '@mui/material';
import { navbarListConfig } from '../../NavbarLayoutConfig';
import MenuDropdown from './menuDropdown';
import MenuItem from './menuItem';

const MenuList = ({lang, menuStyle, stat}) => {
    return (
        <Stack direction={'row'} justifyContent={menuStyle} alignItems={'center'} pt={2}>
            {navbarListConfig.length > 0 && navbarListConfig.map((item) => (
                <React.Fragment key={item.id}>
                    {item.type === 'dropdown' && <MenuDropdown item={item} lang={lang} stat = {stat} />}
                    {item.type === 'item' && <MenuItem item={item} lang={lang} stat = {stat} />}
                </React.Fragment>
            ))}
        </Stack>
    )
}

export default MenuList;
