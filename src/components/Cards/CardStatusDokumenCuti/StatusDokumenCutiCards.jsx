import React from "react"
import CardStatusDokumenCuti from "./CardStatusDokumenCuti"

// Four different card variants with predefined props
export const DraftCard = (props) => (
  <CardStatusDokumenCuti 
    title="Draft" 
    icon="DraftsOutlined" 
    color="#FF9800"
    {...props}
  />
)

export const DisetujuiCard = (props) => (
  <CardStatusDokumenCuti 
    title="Disetujui" 
    icon="CheckCircleOutlined" 
    color="#4CAF50"
    {...props}
  />
)

export const ProsesCard = (props) => (
  <CardStatusDokumenCuti 
    title="Sedang Proses" 
    icon="AccessTimeOutlined" 
    color="#3366FF"
    {...props}
  />
)

export const DitolakCard = (props) => (
  <CardStatusDokumenCuti 
    title="Tidak Disetujui" 
    icon="CancelOutlined" 
    color="#F44336"
    {...props}
  />
)

const StatusDokumenCutiCards = {
  DraftCard,
  DisetujuiCard,
  ProsesCard,
  DitolakCard,
  CardStatusDokumenCuti
}

export default StatusDokumenCutiCards