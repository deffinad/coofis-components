import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import MenuList from './components/menuList';

const Navbar = () => {
const [selectedLang, setSelectedLang] = React.useState("en");

const selectedStyle = (lang) => ({
    flex: 1,
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    backgroundColor: selectedLang === lang ? "#222" : "111"
});

    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2, background: 'black', borderRadius:2}}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white', px: 2 }}>
                Navbar  
            </Typography>
            
            <Stack flex={1} px={2} pb={2}>
                <MenuList lang={selectedLang} />
            </Stack>

            <Stack direction="row"sx={{ border: "2px solid black", borderRadius: "6px", width: "8%", backgroundColor: "#444", }}>
                <Box onClick={() => setSelectedLang("id")} sx={ selectedStyle('id') }>
                    <Typography fontWeight="bold">ID</Typography>
                </Box>
                <Box onClick={() => setSelectedLang("en")} sx={ selectedStyle('en') }>
                    <Typography fontWeight="bold">EN</Typography>
                </Box>
            </Stack>
        </Stack>  
    );
};

export default Navbar;