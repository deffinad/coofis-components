import React from 'react';
import * as MUIIcons from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import CustomToolTip from '../CustomToolTip';
import BackButtonBox from '../BackButton';

const ShortBoxStyle = (BackColor = 'white', color = 'white') => ({
    backgroundColor: BackColor,
    borderRadius: 2.5,
    color: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    cursor: 'pointer',
    position: 'relative'
});

const LongBoxStyle = (BackColor = 'white') => ({
    width: "fit-content",
    backgroundColor: BackColor,
    color: "white",
    paddingY: "6px",
    paddingX: 2,
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    fontFamily: "Nunito Sans",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
        backgroundColor: BackColor,
        opacity: 0.8,
    },
});



const ToolButton = ({ four = false, back = false }) => {
    return (
        <Stack direction="row" spacing={1.8} justifyContent="flex-end">
            {four ? (
                <>
                    <CustomToolTip placeholder="Tidak Disetujui">
                        <Box sx={ShortBoxStyle("#CB3A31", "white")}>
                            <MUIIcons.Close sx={{ fontSize: "30px" }} />
                        </Box>
                    </CustomToolTip>
                    <CustomToolTip placeholder="Ditangguhkan">
                        <Box sx={ShortBoxStyle("#FFB020", "white")}>
                            <MUIIcons.ErrorOutline sx={{ fontSize: "30px" }} />
                        </Box>
                    </CustomToolTip>
                    <CustomToolTip placeholder="Perubahan">
                        <Box sx={ShortBoxStyle("white", "black")}>
                            <MUIIcons.Replay sx={{ fontSize: "30px" }} />
                        </Box>
                    </CustomToolTip>
                    <CustomToolTip placeholder="Disetujui">
                        <Box sx={ShortBoxStyle("#52BD94", "white")}>
                            <MUIIcons.Check sx={{ fontSize: "30px" }} />
                        </Box>
                    </CustomToolTip>
                </>
            ) : back ? (
                <>
                    <BackButtonBox />
                    <Box sx={ LongBoxStyle('#52BD94') } >
                        <Stack direction={"row"} spacing={1}>
                            <MUIIcons.SendOutlined />
                            <Typography variant="body1">Kirim</Typography>
                        </Stack>
                    </Box>
                </>
            ) : 
                <>
                    <Box sx={ LongBoxStyle('#474D66') } >
                        <Stack direction={"row"} spacing={1}>
                            <MUIIcons.EditNote />
                            <Typography variant="body1">Draft</Typography>
                        </Stack>
                    </Box>
                    <Box sx={ LongBoxStyle('#52BD94') } >
                        <Stack direction={"row"} spacing={1}>
                            <MUIIcons.SendOutlined />
                            <Typography variant="body1">Kirim</Typography>
                        </Stack>
                    </Box>
                </>
            }
        </Stack>
    );
};

export default ToolButton;
