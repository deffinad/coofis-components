import React from 'react';
import { Tooltip, Box } from '@mui/material';

const CustomToolTip = ({ placeholder, children }) => {
    
  const ToolTipStyle = {
    slotProps: {
      tooltip: {
        sx: {
          backgroundColor: 'black',
          color: 'white',
        },
      },
      arrow: {
        sx: {
          color: 'black',
        },
      },
    },
    PopperProps: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -5]
          },
        },
      ],
    },
  };

  return (
    <Tooltip title={placeholder} arrow {...ToolTipStyle}>
      <Box>{children}</Box>
    </Tooltip>
  );
};

export default CustomToolTip;