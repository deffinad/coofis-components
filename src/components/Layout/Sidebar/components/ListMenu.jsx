/* eslint-disable no-unused-vars */
import React from 'react';
import { List } from '@mui/material';
import { menuListConfig } from '../../layoutConfig';
import ListMenuGroup from './ListMenuGroup';
import ListMenuCollapse from './ListMenuCollapse';
import ListMenuItem from './ListMenuItem';

const ListMenu = () => {
    return (
        <List>
            {/* <ListItem sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px', background: '#333232a1' }}>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <MUIIcons.DashboardOutlined />
                    <Stack direction={'column'}>
                        <Typography sx={{ color: 'white', fontWeight: 600 }}>Dashboard</Typography>
                        <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>Main Dashboard</Typography>
                    </Stack>
                </Stack>
                <Box component='div' className='menu-badge'>
                    7
                </Box>
            </ListItem>

            <ListItem sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <MUIIcons.ApartmentOutlined />
                    <Stack direction={'column'}>
                        <Typography sx={{ color: 'white', fontWeight: '' }}>About Us</Typography>
                        <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 }}>Yeyeye</Typography>
                    </Stack>
                </Stack>
            </ListItem>

            <ListItem>Aplikasi</ListItem>

            <ListItem sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, borderRadius: '10px' }}>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <MUIIcons.EditCalendarOutlined />
                        <Stack direction={'column'}>
                            <Typography sx={{ color: 'white', fontWeight: '' }}>Calendar</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <MUIIcons.ExpandMore />
            </ListItem>

            <Collapse in={true}>
                <ListItem sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, paddingLeft: 4, borderRadius: '10px' }}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <Stack direction={'row'} gap={2} alignItems={'center'}>
                            <MUIIcons.CalendarMonthOutlined />
                            <Stack direction={'column'}>
                                <Typography sx={{ color: 'white', fontWeight: '' }}>Calendar Together</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box component='div' className='menu-badge'>
                        1
                    </Box>
                </ListItem>
                <ListItem sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, paddingLeft: 4, borderRadius: '10px' }}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <Stack direction={'row'} gap={2} alignItems={'center'}>
                            <MUIIcons.Event />
                            <Stack direction={'column'}>
                                <Typography sx={{ color: 'white', fontWeight: '' }}>Personal Calendar</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </ListItem>
            </Collapse>

            <ListItem sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, borderRadius: '10px' }}>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <MUIIcons.EmailOutlined />
                    <Stack direction={'column'}>
                        <Typography sx={{ color: 'white', fontWeight: '' }}>Email</Typography>
                    </Stack>
                </Stack>
            </ListItem> */}
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