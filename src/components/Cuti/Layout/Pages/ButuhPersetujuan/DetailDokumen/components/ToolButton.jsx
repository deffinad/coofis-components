import React from 'react';
import * as MUIIcons from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import CustomToolTip from '../../../../components/CustomToolTip';

const BoxStyle = (BackColor = 'white', color = 'white') => ({
    backgroundColor: BackColor,
    borderRadius: 2.5,
    color: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    cursor: 'pointer',
    position: 'relative'
});

const ToolTipStyle = {
    slotProps: {
      CustomToolTip: {
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
  };

const ToolButton = () => {
    return (
        <Stack direction='row' spacing={1.8} justifyContent='flex-end'>
            <CustomToolTip placeholder="Tidak Disetujui" >
                <Box sx={BoxStyle('#CB3A31', 'white')}>
                    <MUIIcons.Close sx={{fontSize: '30px'}} />
                </Box>
            </CustomToolTip>
            <CustomToolTip placeholder="Ditangguhkan" >
                <Box sx={BoxStyle('#FFB020', 'white')}>
                    <MUIIcons.ErrorOutline sx={{fontSize: '30px'}} />
                </Box>
            </CustomToolTip>
            <CustomToolTip placeholder="Perubahan" >
                <Box sx={BoxStyle('white', 'black')}>
                    <MUIIcons.Replay sx={{fontSize: '30px'}}/>
                </Box>
            </CustomToolTip>
            <CustomToolTip placeholder="Disetujui" >
                <Box sx={BoxStyle('#52BD94', 'white')}>
                    <MUIIcons.Check sx={{fontSize: '30px'}}/>
                </Box>
            </CustomToolTip>
        </Stack>
    );
};

export default ToolButton;
