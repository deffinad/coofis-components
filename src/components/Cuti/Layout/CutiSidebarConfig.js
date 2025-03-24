export const CutiSidebarConfig = [
    {
        "id": 1,
        "type": 'group',
        "title": 'Personal',
        "children": [
            {
            "id": 1.1,
            "parent_id": 1, // 0 is for top
            "menu_position_id": 1, // follow parent
            "order": 1, // order based on parent_id
            "lang": "en",
            "title": "Menu Operator",
            "sub_title": "",
            "icon": "TaskOutlined",
            "image_icon": "",
            "image_cover": "",
            "external_url": "", // use only to launch external website
            "active": true,
            "clickable": true, // if not then work for hover only
            "type": 'item',
            },
            {
            "id": 1.2,
            "parent_id": 1, // 0 is for top
            "menu_position_id": 1, // follow parent
            "order": 1, // order based on parent_id
            "lang": "en",
            "title": "Dashboard",
            "sub_title": "",
            "icon": "DashboardOutlined",
            "image_icon": "",
            "image_cover": "",
            "external_url": "", // use only to launch external website
            "active": true,
            "clickable": true, // if not then work for hover only
            "type": 'item',
            },
            {
            "id": 1.3,
            "parent_id": 1, // 0 is for top
            "menu_position_id": 1, // follow parent
            "order": 1, // order based on parent_id
            "lang": "en",
            "title": "Form Pengajuan Cuti",
            "sub_title": "",
            "icon": "TaskOutlined",
            "image_icon": "",
            "image_cover": "",
            "external_url": "", // use only to launch external website
            "active": true,
            "clickable": true, // if not then work for hover only
            "type": 'collapse',
            "children": [
                {
                "id": 1.31,
                "parent_id": 1.3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Cuti Tahunan",
                "sub_title": "",
                "icon": "InsertDriveFileOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'item',
                },
                {
                    "id": 1.32,
                    "parent_id": 1.3, // 0 is for top
                    "menu_position_id": 1, // follow parent
                    "order": 1, // order based on parent_id
                    "lang": "en",
                    "title": "Cuti Hari Besar",
                    "sub_title": "",
                    "icon": "InsertDriveFileOutlined",
                    "image_icon": "",
                    "image_cover": "",
                    "external_url": "", // use only to launch external website
                    "active": true,
                    "clickable": true, // if not then work for hover only
                    "type": 'item',
                },
                {
                    "id": 1.33,
                    "parent_id": 1.3, // 0 is for top
                    "menu_position_id": 1, // follow parent
                    "order": 1, // order based on parent_id
                    "lang": "en",
                    "title": "Cuti Sakit",
                    "sub_title": "",
                    "icon": "InsertDriveFileOutlined",
                    "image_icon": "",
                    "image_cover": "",
                    "external_url": "", // use only to launch external website
                    "active": true,
                    "clickable": true, // if not then work for hover only
                    "type": 'item',
                },
                {
                    "id": 1.34,
                    "parent_id": 1.3, // 0 is for top
                    "menu_position_id": 1, // follow parent
                    "order": 1, // order based on parent_id
                    "lang": "en",
                    "title": "Cuti Melahirkan",
                    "sub_title": "",
                    "icon": "InsertDriveFileOutlined",
                    "image_icon": "",
                    "image_cover": "",
                    "external_url": "", // use only to launch external website
                    "active": true,
                    "clickable": true, // if not then work for hover only
                    "type": 'item',
                },
                {
                    "id": 1.35,
                    "parent_id": 1.3, // 0 is for top
                    "menu_position_id": 1, // follow parent
                    "order": 1, // order based on parent_id
                    "lang": "en",
                    "title": "Cuti Alasan Penting",
                    "sub_title": "",
                    "icon": "InsertDriveFileOutlined",
                    "image_icon": "",
                    "image_cover": "",
                    "external_url": "", // use only to launch external website
                    "active": true,
                    "clickable": true, // if not then work for hover only
                    "type": 'item',
                },
                {
                    "id": 1.36,
                    "parent_id": 1.3, // 0 is for top
                    "menu_position_id": 1, // follow parent
                    "order": 1, // order based on parent_id
                    "lang": "en",
                    "title": "Cuti Diluar Tanggungan Negara",
                    "sub_title": "",
                    "icon": "InsertDriveFileOutlined",
                    "image_icon": "",
                    "image_cover": "",
                    "external_url": "", // use only to launch external website
                    "active": true,
                    "clickable": true, // if not then work for hover only
                    "type": 'item',
                }
                ]
            }
        ]
    },
    {
        "id": 2,
        "type": 'group',
        "title": 'Dokumen Persetujuan',
        "children": [
            {
                "id": 2.1,
                "parent_id": 2, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Butuh Persetujuan",
                "sub_title": "",
                "icon": "DoneAll",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                'count': 2,
                "type": 'item',
            },
            {
                "id": 2.2,
                "parent_id": 2, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Disetujui Anda",
                "sub_title": "",
                "icon": "TaskOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'item',
            },
            {
                "id": 2.3,
                "parent_id": 2, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Tidak Disetujui Anda",
                "sub_title": "",
                "icon": "PlaylistRemove",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'item',
            },
            {
                "id": 2.4,
                "parent_id": 2, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Dikembalikan Anda",
                "sub_title": "",
                "icon": "FileOpenOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'item',
            }
        ]
    },
    {
        "id": 3,
        "type": 'group',
        "title": 'Dokumen Personal',
        "children": [
            {
                "id": 3.1,
                "parent_id": 3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Draft",
                "sub_title": "",
                "icon": "EditNote",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                'count': ' ',
                "type": 'item',
            },
            {
                "id": 3.2,
                "parent_id": 3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Sedang Diproses",
                "sub_title": "",
                "icon": "Timelapse",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                'count' : 2,
                "type": 'item',
            },
            {
                "id": 3.3,
                "parent_id": 3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Disetujui",
                "sub_title": "",
                "icon": "TaskOutlined",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'item',
            },
            {
                "id": 3.4,
                "parent_id": 3, // 0 is for top
                "menu_position_id": 1, // follow parent
                "order": 1, // order based on parent_id
                "lang": "en",
                "title": "Tidak Disetujui",
                "sub_title": "",
                "icon": "PlaylistRemove",
                "image_icon": "",
                "image_cover": "",
                "external_url": "", // use only to launch external website
                "active": true,
                "clickable": true, // if not then work for hover only
                "type": 'item',
            }
        ]
    }
    
]