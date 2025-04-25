import { Stack, Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import * as MUIIcons from "@mui/icons-material";
import { fontFamily } from "@/shared/AppConst";

const CardDashboardOperator = ({ title, count, icon, backgroundColor, color }) => {
  const IconComponent = MUIIcons[icon] || MUIIcons.HelpOutline;

  return (
    <Stack direction="column" spacing={2} justifyContent="center" alignItems="center" p={4}>
      <Card sx={{ borderRadius: 2, width: 330, textAlign: "center", paddingX: 0, boxShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
            <Box
              sx={{
                width: 33,
                height: 33,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: backgroundColor,
                color: color
              }}
            >
              <IconComponent />
            </Box>
            <Typography fontFamily={fontFamily} fontWeight="600" fontSize={"16px"} sx={{ color: color }}>
              {title}
            </Typography>
          </Stack>
          <Typography fontFamily={fontFamily} fontSize={"50px"} variant="h4" sx={{ fontWeight: "700", mt: 3, textAlign: "right" }}>
            {count}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

CardDashboardOperator.propTypes = {
    title: PropTypes.string, 
    count: PropTypes.number,
    icon: PropTypes.string, 
    backgroundColor: PropTypes.string, 
    color: PropTypes.string
}

export default CardDashboardOperator;
