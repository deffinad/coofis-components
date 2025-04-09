export const DataOperatorKKPDitambahkan= [
    {
        "id": 1,
        "type": 'tableHeader',
        "children": [
            {
                'id': 1.1,
                'parent_id': 1,
                'title': 'Pegawai',
                'field': 'pegawai'
            },
            {
                'id': 1.2,
                'parent_id': 1,
                'title': 'Tindakan',
                'field': 'tindakan'
            }
            
        ]
    },
    {
        "id": 2,
        "type": 'tableCell',
        "pagination": 1,
        "children": [
            {
                'id': 2.1,
                'parent_id': 2,
                'pegawai' : ['HERDIAN ANGGARA WINATA / 199309262020121001 / PRANATTA', 'KOMPUTER PERTAMA'],
                'tindakan' : '7'
            }
        ]
    }
]