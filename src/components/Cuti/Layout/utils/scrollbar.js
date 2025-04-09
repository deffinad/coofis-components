export const scrollbar = (thumbColor) => ({
    '&::-webkit-scrollbar': {
        width: '8px', // Lebar scrollbar
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent', // Warna track scrollbar
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#E0E0E0', // Warna thumb scrollbar
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555', // Warna thumb saat hover
    }
})