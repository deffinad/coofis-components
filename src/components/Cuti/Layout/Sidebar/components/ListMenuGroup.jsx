import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@mui/material';
import { stylingConfig } from '../../StylingConfig';
import ListMenuCollapse from './ListMenuCollapse';
import ListMenuItem from './ListMenuItem';

const ListMenuGroup = ({ item, level, selectedItem, setSelectedItem }) => {
    const style = stylingConfig[0];

    return (
        <React.Fragment>
            <ListItem sx={{ paddingLeft: '9px', color: style.primaryColor, fontWeight: 'bold', fontFamily: style.primaryColor }}>
                {item?.title}
            </ListItem>

            {item.children && item.children.map((child) => (
                <React.Fragment key={child.id}>
                    {child.type === 'collapse' && <ListMenuCollapse item={child} level={level + 1} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
                    {child.type === 'item' && <ListMenuItem item={child} level={level + 1} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}

ListMenuGroup.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
    selectedItem: PropTypes.string,
    setSelectedItem: PropTypes.func,
};

export default ListMenuGroup;
