import React, { useState } from 'react';
import { List } from '@mui/material';
import ListMenuGroup from './ListMenuGroup';
import ListMenuCollapse from './ListMenuCollapse';
import ListMenuItem from './ListMenuItem';

const ListMenu = ({config}) => {
    const [selectedItem, setSelectedItem] = useState('dashboard'); // Dashboard aktif di awal

    return (
        <List>
            {config.length > 0 && config.map((item) => (
                <React.Fragment key={item.id}>
                    {item.type === 'group' && <ListMenuGroup item={item} level={1} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
                    {item.type === 'collapse' && <ListMenuCollapse item={item} level={1} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
                    {item.type === 'item' && <ListMenuItem item={item} level={1} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
                </React.Fragment>
            ))}
        </List>
    )
}

export default ListMenu;
