/* eslint-disable no-unused-vars */
import React from 'react';
import { List } from '@mui/material';
import { menuListConfig } from '../../../layoutConfig';
import ListMenuGroup from './ListMenuGroup';
import ListMenuCollapse from './ListMenuCollapse';
import ListMenuItem from './ListMenuItem';

const ListMenu = () => {
    return (
        <List>
            {menuListConfig.length > 0 && menuListConfig.map((item) => (
                <React.Fragment key={item.id}>
                    {item.type === 'group' && <ListMenuGroup item={item} level={1} />}
                    {item.type === 'collapse' && <ListMenuCollapse item={item} level={1} />}
                    {item.type === 'item' && <ListMenuItem item={item} level={1} />}
                </React.Fragment>
            ))}
        </List>
    )
}

export default ListMenu