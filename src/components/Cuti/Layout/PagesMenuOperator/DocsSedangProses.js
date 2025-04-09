export const DataSedangProses = [
    {
        "id": 1,
        "type": "tableHeader",
        "children": [
            { "id": 1.1, "parent_id": 1, "title": "No", "field": "no" },
            { "id": 1.2, "parent_id": 1, "title": "Tanggal Pengajuan", "field": "tanggalPengajuan" },
            { "id": 1.3, "parent_id": 1, "title": "Tanggal Cuti", "field": "tanggalCuti" },
            { "id": 1.4, "parent_id": 1, "title": "Jenis Cuti", "field": "jenisCuti" },
            { "id": 1.5, "parent_id": 1, "title": "Pemohon", "field": "pemohon" },
            { "id": 1.6, "parent_id": 1, "title": "Yang Menyetujui", "field": "yangMenyetujui" },
            { "id": 1.7, "parent_id": 1, "title": "Detail", "field": "detail" }
        ]
    },
    {
        "id": 2,
        "type": "tableCell",
        "pagination": 1,
        "children": [
            {
                "id": 2.1,
                "parent_id": 2,
                "no": 1,
                "tanggalPengajuan": "06-03-2025",
                "tanggalCuti": "07-03-2025 s/d 07-03-2025",
                "jenisCuti": "Pengajuan Cuti Tahunan",
                "pemohon": [
                    "1985050420091",
                    "22001 / NILAM AMALIA PUSPARANI"
                ],
                "yangMenyetujui": [
                    "[1] 1981120620050",
                    "22001 / SUPRIYATUN",
                    "[2] 1972081220011",
                    "21001 / AULIA RIZA FAHRRANI"
                ],
                'detail': '1',
                'dialogTeks' : 'Apakah Anda yakin untuk menghapus dokumen ini?'
            }
        ]
    }
];
