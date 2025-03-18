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
        "clickable": true // if not then work for hover only
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
        "clickable": true // if not then work for hover only
    },
    {
        "id": 3,
        "parent_id": 0, // 0 is for top
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
        "children": [
            {
                "id": 3.1,
                "parent_id": 3,
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
            },
            {
                "id": 3.2,
                "parent_id": 3,
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Personal Calendar",
                "sub_title": "",
                "icon": "PermContactCalendarOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
            }
        ]
    }
]