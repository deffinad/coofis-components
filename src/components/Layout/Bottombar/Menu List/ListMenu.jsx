import React from 'react';
import { Stack } from '@mui/material';
import { menuListConfig } from '../../layoutConfig';
import MenuGroup from './ListMenuGroup';
import MenuCollapse from './ListMenuCollapse';
import MenuItem from './ListMenuItem';

const ListMenu = () => {
    return (
        <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'flex-start'}}>
            {menuListConfig.length > 0 && menuListConfig.map((item) => (
                <React.Fragment key={item.id}>
                    {item.type === 'group' && <MenuGroup item={item} level={1} />}
                    {item.type === 'collapse' && <MenuCollapse item={item} level={1} />}
                    {item.type === 'item' && <MenuItem item={item} level={1} />}
                </React.Fragment>
            ))}
        </Stack>
    );
};

export default ListMenu;