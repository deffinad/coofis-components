import React from 'react'
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import { InsertDriveFileOutlined, VisibilityOutlined, Close, UploadFile } from "@mui/icons-material";
import { stylingConfig } from '../../StylingConfig'

const Lampiran = ({ config = null }) => {
const style = stylingConfig[0]

    return (
        <Box sx={{height:'100%', backgroundColor: 'white', borderRadius: 2, boxShadow: '1px 6px 8px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction= 'column'>
                <Box sx={{borderRadius: "2px 2px 0px 0px", backgroundColor: '#F5F5F5', paddingY: 2, paddingX: 3}}>
                    <Typography sx={{fontSize:'20px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '700'}}> Lampiran </Typography>
                </Box>

                { config !== null ? (
                    <Box sx={{borderRadius: "2px 2px 0px 0px", paddingY: 2, paddingX: 3}}>
                        <Box sx={{ border: "1px dashed gray", padding: 2, borderRadius: 2 }}>
                            <Stack direction={'column'} spacing={1} sx={{mb:2}}>
                                <Typography sx={{ fontFamily: style.fontFamily, fontWeight: "600", fontSize: 20, color: 'black' }}>Lampiran</Typography>
                                <Typography sx={{ fontFamily: style.fontFamily, fontSize: 16, color: "#000000", mb: 2, fontWeight: '400' }}>
                                Total ukuran berkas yang dapat diproses adalah maksimal 5 M dengan ekstensi (*.JPEG, *.JPG, *.PDF.)
                                </Typography>
                            </Stack>
                            {config.map((file) => (
                                <Box
                                    key={file.id}
                                    sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingX: 2,
                                    paddingY: 0.2,
                                    borderRadius: 2,
                                    transition: "background-color 0.2s ease",
                                    "&:hover": { backgroundColor: "#EEF0F7" }
                                    }}
                                >
                                    <InsertDriveFileOutlined sx={{ fontSize: 24, marginRight: 1, color: '#0A0A0A', mr: 2 }} />
                                    <Typography color= '#404040' sx={{ fontSize: 20, fontFamily:style.fontFamily, flexGrow: 1 }}>{file.name}</Typography>
                                    <IconButton>
                                        <VisibilityOutlined />
                                    </IconButton>
                                    <IconButton>
                                        <Close />
                                    </IconButton>
                                </Box>
                            ))}
                    
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                            <Button variant="contained" startIcon={<UploadFile />}>
                                Pilih berkas
                            </Button>
                        </Box>

                    </Box>
                  </Box>
                ) : (
                    <Box sx={{paddingY: 2, paddingX: 4}}>
                        <Typography sx={{fontSize:'17px', color:style.blackColor, fontFamily:style.fontFamily, fontWeight: '600'}}> Tidak Ada Lampiran </Typography>
                    </Box>
                )}
                
            </Stack>
        </Box>
    )
}

export default Lampiran