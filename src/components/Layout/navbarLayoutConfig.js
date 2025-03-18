export const navbarListConfig = [
  {
    "id": 1,
    "parent_id": 0, // 0 is for top
    "menu_position_id": 1,
    "order": 1, // order based on parent_id
    "linktype": "internal", // internal, external, devider
    "title_en": "Home",
    "sub_title_en": "Home Page",
    "title_id": "Beranda",
    "sub_title_id": "Halaman Beranda",
    "icon": "Home",
    "image_icon": "png file URI",
    "image_cover": "png file URI",
    "external_url": "https://.....", // use only to launch external website
    "active": true, // show only when true
    "clickable": true, // if not then work for hover only
    "type" : "item"
  },
  {
    "id": 2,
    "parent_id": 0, // 0 is for top
    "menu_position_id": 1,
    "order": 1, // order based on parent_id
    "linktype": "external", // internal, external, devider
    "title_en": "PETA",
    "sub_title_en": "PETA Organization",
    "title_id": "PETA",
    "sub_title_id": "Organisasi PETA",
    "icon": "Pets",
    "image_icon": "png file URI",
    "image_cover": "png file URI",
    "external_url": "https://peta.com", // use only to launch external website
    "active": true, // show only when true
    "clickable": true, // if not then work for hover only
    "type" : "item"
  },
  {
    "id": 3,
    "parent_id": 0, // 0 is for top
    "menu_position_id": 1, // follow parent
    "order": 1, // order based on parent_id
    "title_en": "Profile",
    "sub_title_en": "Manage Profile",
    "title_id": "Profil", 
    "sub_title_id": "Kelola Profil",
    "icon": "AccountBox",
    "image_icon": "",
    "image_cover": "",
    "external_url": "", // use only to launch external website
    "active": true,
    "clickable": true, // if not then work for hover only
    "type": 'dropdown',
    "children": [
      {
        "id": 3.1,
        "parent_id": 3,
        "menu_position_id": 1, // follow parent
        "order": 1, // order based on parent_id
        "title_en": "Settings",
        "sub_title_en": "Email, Password",
        "title_id": "Pengaturan",
        "sub_title_id": "Email, Kata Sandi",
        "icon": "",
        "image_icon": "",
        "image_cover": "",
        "external_url": "", // use only to launch external website
        "active": true,
        "clickable": true, // if not then work for hover only
        "type" : "item"
      },
      {
        "id": 3.2,
        "parent_id": 3,
        "menu_position_id": 1, // follow parent
        "order": 1, // order based on parent_id
        "title_en": "Logout",
        "sub_title_en": "Logout from account",
        "title_id": "Keluar",
        "sub_title_id": "Keluar dari akun",
        "icon": "",
        "image_icon": "",
        "image_cover": "",
        "external_url": "", // use only to launch external website
        "active": true,
        "clickable": true, // if not then work for hover only
        "type" : "dropdown",
        "children" : [
          {
            "id": 3.21,
            "parent_id": 3.2,
            "menu_position_id": 1, // follow parent
            "order": 1, // order based on parent_id
            "title_en": "Login page",
            "sub_title_en": "Go to login page",
            "title_id": "Halaman Masuk",
            "sub_title_id": "Pergi ke halaman masuk",
            "icon": "",
            "image_icon": "",
            "image_cover": "",
            "external_url": "", // use only to launch external website
            "active": true,
            "clickable": true, // if not then work for hover only
            "type" : "item"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "parent_id": 0, // 0 is for top
    "menu_position_id": 1, // follow parent
    "order": 1, // order based on parent_id
    'linktype': 'external',
    "title_en": "Calendar",
    "sub_title_en": "See Calendar",
    "title_id": "Kalender", 
    "sub_title_id": "Lihat Kalender",
    "icon": "CalendarMonth",
    "image_icon": "",
    "image_cover": "",
    "external_url": "https://tanggalan.com/2025", // use only to launch external website
    "active": true,
    "clickable": true, // if not then work for hover only
    "type": 'item'
  }
]