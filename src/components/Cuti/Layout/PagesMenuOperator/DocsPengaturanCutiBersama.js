export const DataCutiBersama = [
    {
        "id": 1,
        "type": 'tableHeader',
        "children": [
            {
                'id': 1.1,
                'parent_id': 1,
                'title': 'Tanggal',
                'field': 'tanggal'
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
                'title': 'Aksi',
                'field': 'aksi'
            }
            
        ]
    },
    {
        "id": 2,
        "type": 'tableCell',
        "pagination": 0,
        "children": [
            {
                'id': 2.1,
                'parent_id': 2,
                'aksi': '2',
                'hariLibur': 'TextField',
                'placeholder': 'Masukan nama hari',
                'dialogTtitle': 'Hapus Hari Libur Cuti Bersama',
                'dialogTeks' : 'Apakah Anda yakin untuk menghapus Hari Libur Cuti Bersama ini?'
            },
            {
                'id': 2.2,
                'parent_id': 2,
                'aksi' : '3',
                'hariLibur': 'TextField',
                'placeholder': 'Masukan nama hari',
                'dialogTtitle': 'Hapus Hari Libur Cuti Bersama',
                'dialogTeks' : 'Apakah Anda yakin untuk menghapus Hari Libur Cuti Bersama ini?'
            }
        ]
    },
]