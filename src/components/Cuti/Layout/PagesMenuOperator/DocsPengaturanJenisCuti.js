export const DataPengaturanJenisCuti = [
    {
      id: 1,
      type: 'tableHeader',
      children: [
        { id: 1.1, parent_id: 1, title: 'No', field: 'no' },
        { id: 1.2, parent_id: 1, title: 'Jenis Cuti', field: 'jenisCuti' },
        { id: 1.3, parent_id: 1, title: 'Kuota', field: 'kuota' },
        { id: 1.4, parent_id: 1, title: 'Tipe Hari', field: 'tipeHari' },
        { id: 1.5, parent_id: 1, title: 'Khusus', field: 'khusus' },
        { id: 1.6, parent_id: 1, title: 'Bisa Dibatalkan', field: 'bisaDibatalkan' },
        { id: 1.7, parent_id: 1, title: 'Sekali Pakai', field: 'sekaliPakai' },
        { id: 1.8, parent_id: 1, title: 'Wajib Attachment', field: 'wajibAttachment' },
      ]
    },
    {
      id: 2,
      type: 'tableCell',
      pagination: 0,
      children: [
        {
          id: 2.1,
          parent_id: 2,
          no: 1,
          jenisCuti: 'Cuti Tahunan',
          kuota: 12,
          tipeHari: 'Hari Kerja',
          khusus: 'SEMUA',
          bisaDibatalkan: 'YA',
          sekaliPakai: 'TIDAK',
          wajibAttachment: 'Tidak Wajib'
        },
        {
          id: 2.2,
          parent_id: 2,
          no: 2,
          jenisCuti: 'Cuti Besar\n- Maksimal 90 hari [SEMUA]\nCuti Besar',
          kuota: 0,
          tipeHari: 'Hari Kalender',
          khusus: 'SEMUA',
          bisaDibatalkan: 'YA',
          sekaliPakai: 'YA',
          wajibAttachment: 'Tidak Wajib'
        }
      ]
    }
  ]