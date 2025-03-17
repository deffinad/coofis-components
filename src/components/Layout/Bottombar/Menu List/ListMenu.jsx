import React, { useState, useEffect } from 'react';
import { Stack, Button, Box } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { menuListConfig } from '../../layoutConfig';
import MenuGroup from './ListMenuGroup';
import MenuCollapse from './ListMenuCollapse';
import MenuItem from './ListMenuItem';

const ListMenu = () => {
    const [currentLang, setCurrentLang] = useState('en');
    const [filteredMenu, setFilteredMenu] = useState([]);
    
    // Filter menu items based on current language
    useEffect(() => {
        const filtered = menuListConfig.filter(item => item.lang === currentLang);
        setFilteredMenu(filtered);
    }, [currentLang]);
    
    // Toggle between languages
    const toggleLanguage = () => {
        setCurrentLang(prev => prev === 'en' ? 'id' : 'en');
    };
    
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'flex-start'}}>
                {filteredMenu.length > 0 && filteredMenu.map((item) => (
                    <React.Fragment key={`${item.id}-${item.lang}`}>
                        {item.type === 'group' && <MenuGroup item={item} level={1} currentLang={currentLang} />}
                        {item.type === 'collapse' && <MenuCollapse item={item} level={1} currentLang={currentLang} />}
                        {item.type === 'item' && <MenuItem item={item} level={1} currentLang={currentLang} />}
                    </React.Fragment>
                ))}
            </Stack>
            
            <Button 
                onClick={toggleLanguage} 
                sx={{
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    minWidth: 'auto',
                    p: 1,
                    mx: 2,
                    '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                    }
                }}
            >
                <TranslateIcon />
                <Box component="span" sx={{ ml: 1 }}>{currentLang.toUpperCase()}</Box>
            </Button>
        </Box>
    );
};

export default ListMenu;