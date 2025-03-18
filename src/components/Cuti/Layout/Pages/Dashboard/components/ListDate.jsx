import React from 'react';
import { List, Stack, Typography, Box } from '@mui/material';
import { DateData } from '../DateData';
import { stylingConfig } from '../../../StylingConfig';
import { Circle } from '@mui/icons-material';

const ListDate = () => {
    const style = stylingConfig[0];
    return (
        <List>
            {DateData.length > 0 && DateData.map((item) => (
                <React.Fragment key={item.id}>
                    <Stack direction={'column'} spacing={1}>
                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            <Circle sx={{ fontSize: '8px', color: 'red', borderRadius: '20px', border: '0.3px solid #A0A0A0', p:'1px'}}  />
                            <Typography sx={{ fontSize: '12px', fontFamily: style.fontFamily, color: '#8F95B2', fontWeight: '700' }}>
                                {item.date}
                            </Typography>
                        </Stack>
                        <Box paddingLeft={2.5} paddingBottom={1}>
                            <Typography sx={{ fontSize: '16px', fontFamily: style.fontFamily, color: style.primaryColor, fontWeight: '600' }}>
                                    {item.title}
                            </Typography>
                        </Box>
                    </Stack>
                </React.Fragment>
            ))}
        </List>
    )
}

export default ListDate