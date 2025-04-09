export const DataJenisCuti = [
    {
        "id": 1,
        "type": 'tableHeader',
        "children": [
            { 'id': '1.1', 'parent_id': 1, 'title': 'Nama Cuti', 'field': 'namaCuti' },
            { 'id': '1.2', 'parent_id': 1, 'title': 'Kuota (Hari)', 'field': 'kuota' },
            { 'id': '1.3', 'parent_id': 1, 'title': 'Jenis Kelamin', 'field': 'jenisKelamin' },
            { 'id': '1.4', 'parent_id': 1, 'title': 'Tipe Hari Cuti', 'field': 'tipeHariCuti' },
            { 'id': '1.5', 'parent_id': 1, 'title': 'Sekali Digunakan', 'field': 'sekaliDigunakan' },
            { 'id': '1.6', 'parent_id': 1, 'title': 'Dapat Dibatalkan', 'field': 'dapatDibatalkan' },
            { 'id': '1.7', 'parent_id': 1, 'title': 'Jumlah Hari Minimal Wajib Upload', 'field': 'jumlahHariMinimal' },
            { 'id': '1.8', 'parent_id': 1, 'title': 'Tindakan', 'field': 'tindakan' }
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
                'tindakan': '9',
                'namaCuti': 'TextField',
                'placeholder': 'Cuti Tahunan',
                'kuota': ['TextField', true, '0'],
                "jenisKelamin": ["AutoComplete", { "options": ["Perempuan", "Laki-Laki", "Semua"] }],
                "tipeHariCuti": ["AutoComplete", { "options": ["Hari Kerja", 'Hari Kalender'] }],
                "sekaliDigunakan": ["AutoComplete", { "options": ["Ya", 'Tidak'] }],
                "dapatDibatalkan": ["AutoComplete", { "options": ["Ya", 'Tidak'] }],
                'jumlahHariMinimal': ['TextField', true, '0'],
                'dialogTitle': 'Hapus Hari Libur Nasional',
                'dialogTeks' : 'Apakah Anda yakin untuk menghapus Hari Libur Nasional ini?'
            }
        ]
    },
]