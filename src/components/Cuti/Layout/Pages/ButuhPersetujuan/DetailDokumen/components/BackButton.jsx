import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { stylingConfig } from "../../../../StylingConfig";

const BackButtonBox = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const style = stylingConfig[0];

    const handleBack = () => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        if (pathSegments.length > 1) {
            const prevPath = `/${pathSegments.slice(0, -1).join("/")}`;
            navigate(prevPath);
        } else {
            navigate("/");
        }
    };

    return (
        <Box
            onClick={handleBack}
            sx={{
                width: 'fit-content',
                backgroundColor: style.redColor,
                color: "white",
                paddingY: "6px",
                paddingX: 2,
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
                fontFamily: style.fontFamily,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                    backgroundColor: "#cc0000",
                },
            }}
        >
            <Typography variant="body1">Kembali</Typography>
        </Box>
    );
};

export default BackButtonBox;
