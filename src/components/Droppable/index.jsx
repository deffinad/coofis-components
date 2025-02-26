
// import React from 'react';
import PropTypes from 'prop-types';
import {useDroppable} from '@dnd-kit/core';

const Droppable = ( props ) => {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const style = {
        opacity: isOver ? 1 : 0.5,
        width: '100%',
        height: '100px',
        backgroundColor: 'lightblue',
        border: '1px solid black',
    };
    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
};
Droppable.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Droppable;  