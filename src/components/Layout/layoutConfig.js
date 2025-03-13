export const menuListConfig = [
    {
        "id": 1,
        "parent_id": 0, // 0 is for top
        "menu_position_id": 1,
        "order": 1, // order based on parent_id
        "lang": "en",
        "title": "Dashboard",
        "sub_title": "Main Dashboard",
        "icon": "DashboardOutlined",
        "image_icon": "",
        "image_icon_xs": "",
        "image_icon_sm": "",
        "image_icon_lg": "",
        "image_icon_xl": "",
        "image_cover": "",
        "external_url": "", // use only to launch external website
        "active": true, // show only when true
        "activePathname": '/',
        "clickable": true, // if not then work for hover only
        "type": 'item',
    },
    {
        "id": 2,
        "parent_id": 0, // 0 is for top
        "menu_position_id": 1, // follow parent
        "order": 1, // order based on parent_id
        "lang": "en",
        "title": "About Us",
        "sub_title": "Our Company Description",
        "icon": "ApartmentOutlined",
        "image_icon": "",
        "image_cover": "",
        "external_url": "", // use only to launch external website
        "active": true,
        "activePathname": '/about-us',
        "clickable": true, // if not then work for hover only
        "type": 'item',
    },
    {
        "id": 3,
        "type": 'group',
        "title": 'Aplikasi',
        "children": [
            {
                "id": 4,
                "parent_id": 3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Calendar",
                "sub_title": "",
                "icon": "CalendarMonthOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'collapse',
                "children": [
                    {
                        "id": 4.1,
                        "parent_id": 4,
                        "menu_position_id": 1, // follow parent
                        "order": 1, // order based on parent_id
                        "lang": "en",
                        "title": "Calendar Together Parent",
                        "sub_title": "",
                        "icon": "",
                        "image_icon": "",
                        "image_cover": "",
                        "external_url": "", // use only to launch external website
                        "active": true,
                        "clickable": true, // if not then work for hover only
                        "type": 'collapse',
                        "children": [
                            {
                                "id": 4.11,
                                "parent_id": 4,
                                "menu_position_id": 1, // follow parent
                                "order": 1, // order based on parent_id
                                "lang": "en",
                                "title": "Calendar Together",
                                "sub_title": "",
                                "icon": "EventOutlined",
                                "image_icon": "",
                                "image_cover": "",
                                "external_url": "", // use only to launch external website
                                "active": true,
                                "clickable": true, // if not then work for hover only
                                "type": 'item',
                                "count": 1,
                            },
                            {
                                "id": 4.12,
                                "parent_id": 4,
                                "menu_position_id": 1, // follow parent
                                "order": 1, // order based on parent_id
                                "lang": "en",
                                "title": "Calendar Satker",
                                "sub_title": "",
                                "icon": "EventOutlined",
                                "image_icon": "",
                                "image_cover": "",
                                "external_url": "", // use only to launch external website
                                "active": true,
                                "clickable": true, // if not then work for hover only
                                "type": 'item',
                                "count": 1000,
                            }
                        ]
                    },
                    {
                        "id": 4.2,
                        "parent_id": 4,
                        "menu_position_id": 1, // follow parent
                        "order": 1, // order based on parent_id
                        "lang": "en",
                        "title": "Personal Calendar",
                        "sub_title": "",
                        "icon": "",
                        "image_icon": "",
                        "image_cover": "",
                        "external_url": "", // use only to launch external website
                        "active": true,
                        "activePathname": '/personal-calendar',
                        "clickable": true, // if not then work for hover only
                        "type": 'item',
                    }
                ]
            },
            {
                "id": 5,
                "parent_id": 3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Email",
                "sub_title": "",
                "icon": "EmailOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "activePathname": '/email',
                "clickable": true, // if not then work for hover only
                "type": 'item',
                "count": 2
            }
        ]
    }
]