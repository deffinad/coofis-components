import {Box, Stack, Typography } from "@mui/material";
import IOSSwitch from "../../Switch/Switch";

function Showcase({ titleStat, setTitleStat, subtitleStat, setSubtitleStat, iconStat, setIconStat, style, setStyle }) {
  const handleChange = (event, type) => {
    const newValue = event.target.checked;
    const activeCount = [titleStat, subtitleStat, iconStat].filter(Boolean).length;

    if (!newValue && activeCount === 1) return;

    if (type === "title") setTitleStat(newValue);
    else if (type === "subtitle") setSubtitleStat(newValue);
    else if (type === "icon") setIconStat(newValue);
  };

  const selectedStyle = (stackStyle) => ({
    flex: 1,
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    backgroundColor: style === stackStyle ? "#222" : "111"
    });

  return (
    <>
        {/* Showcase Button */}
        <Stack spacing={2} direction="row" alignItems="flex-end" justifyContent="flex-end" sx={{ width: '500', p: 2, background: 'black', borderRadius:2}}>
        {/* Title, Subtitle, Icon Button */}
        <Stack direction="column" sx={{ border: "2px solid black", borderRadius: "6px", backgroundColor: "#444", }}>
            <Stack direction="row" gap={2} alignItems="center" justifyContent='space-between' sx={{p:1}}>
                <Typography sx={{fontWeight: 'bold'}}>Icon</Typography>
                <IOSSwitch checked={iconStat} onChange={(e) => handleChange(e, 'icon')} />
            </Stack>
            <Stack direction="row" gap={2} alignItems="center" justifyContent='space-between' sx={{p:1}}>
                <Typography sx={{fontWeight: 'bold'}}>Title</Typography>
                <IOSSwitch checked={titleStat} onChange={(e) => handleChange(e, 'title')} />
            </Stack>
            <Stack direction="row" gap={2} alignItems="center" justifyContent='space-between' sx={{p:1}}>
                <Typography sx={{fontWeight: 'bold'}}>Subtitle</Typography>
                <IOSSwitch checked={subtitleStat} onChange={(e) => handleChange(e, 'subtitle')} />
            </Stack>
            </Stack>
            {/* JustifyContent Button */}
            <Stack direction="column"sx={{ border: "2px solid black", borderRadius: "6px", width: "8%", backgroundColor: "#444", }}>
                <Box onClick={() => setStyle("flex-start")} sx={ selectedStyle('flex-start') }>
                    <Typography fontWeight="bold">Flex-Start</Typography>
                </Box>
                <Box onClick={() => setStyle("center")} sx={ selectedStyle('center') }>
                    <Typography fontWeight="bold">Center</Typography>
                </Box>
                <Box onClick={() => setStyle("flex-end")} sx={ selectedStyle('flex-end') }>
                    <Typography fontWeight="bold">Flex-End</Typography>
                </Box>  
            </Stack>
        </Stack>
    </>
  );
}

export default Showcase;
