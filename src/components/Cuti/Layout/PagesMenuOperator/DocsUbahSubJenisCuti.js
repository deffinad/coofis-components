export const DataSubJenisCuti = [
    {
        "id": 1,
        "type": 'tableHeader',
        "children": [
            { 'id': '1.1', 'parent_id': 1, 'title': 'Kuota (Hari)', 'field': 'kuota' },
            { 'id': '1.2', 'parent_id': 1, 'title': 'Pilih Tanggal', 'field': 'pilihTanggal' },
            { 'id': '1.3', 'parent_id': 1, 'title': 'Jenis Kelamin', 'field': 'jenisKelamin' },
            { 'id': '1.4', 'parent_id': 1, 'title': 'Informasi Sub jenis Cuti', 'field': 'informasiSubJenisCuti' },
            { 'id': '1.5', 'parent_id': 1, 'title': 'Tindakan', 'field': 'tindakan' }
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
                'tindakan': '8',
                'kuota': ['TextField', true, '0'],
                "jenisKelamin": ["AutoComplete", { "options": ["Perempuan", "Laki-Laki", "Semua"] }],
                "pilihTanggal": ["AutoComplete", { "options": ["Manual", 'Otomatis'] }],
                'informasiSubJenisCuti': 'TextField',
                'placeholder': 'Masukan Informasi',
                'dialogTitle': 'Hapus Sub Jenis Cuti',
                'dialogTeks' : 'Apakah Anda yakin untuk menghapus sub jenis cuti ini?'
            }
        ]
    },
]