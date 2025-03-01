/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@mui/material';
import ListMenuCollapse from './ListMenuCollapse';
import ListMenuItem from './ListMenuItem';

const ListMenuGroup = ({ item, level }) => {
    return (
        <React.Fragment>
            <ListItem>{item?.title}</ListItem>

            {item.children && item.children.map((item) => (
                <React.Fragment key={item.id}>
                    {item.type === 'group' && <ListMenuGroup item={item} level={level + 1} />}
                    {item.type === 'collapse' && <ListMenuCollapse item={item} level={level + 1} />}
                    {item.type === 'item' && <ListMenuItem item={item} level={level + 1} />}
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}

ListMenuGroup.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
}

export default ListMenuGroup
