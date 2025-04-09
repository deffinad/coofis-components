export const DataPengaturanHariKerja1= [
    {
        "id": 1,
        "type": 'tableHeader',
        "children": [
            {
                'id': 1.1,
                'parent_id': 1,
                'title': 'Status',
                'field': 'status'
            },
            {
                'id': 1.2,
                'parent_id': 1,
                'title': 'Hari Libur',
                'field': 'hariLibur'
            },
            {
                'id': 1.3,
                'parent_id': 1,
                'title': ' ',
                'field': ' '
            }
        ]
    },
    {
        "id": 2,
        "type": 'tableCell',
        "children": [
            {
                'id': 2.1,
                'parent_id': 2,
                'status' : 'checkbox',
                'hariLibur' : 'Sabtu'
            },
            {
                'id': 2.2,
                'parent_id': 2,
                'status' : 'checkbox',
                'hariLibur' : 'Minggu'
            },
            {
                'id': 2.3,
                'parent_id': 2,
                'status' : 'checkbox',
                'hariLibur' : 'Libur Nasional'
            },
            {
                'id': 2.4,
                'parent_id': 2,
                'status' : 'checkbox',
                'hariLibur' : 'Cuti Bersama'
            }
        ]
    }
]