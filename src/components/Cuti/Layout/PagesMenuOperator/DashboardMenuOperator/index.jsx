import { Stack, Card, CardContent, Typography, Box } from "@mui/material";
import * as MUIIcons from "@mui/icons-material";
import { stylingConfig } from "../../StylingConfig";

const DashboardMenuOperator = ({ config, scrollbar }) => {
  const style = stylingConfig[0];

  return (
    <Stack direction="column" spacing={2} justifyContent="space-evenly" p={4}>
      {[0, 1].map((row) => (
        <Stack key={row} direction="row" spacing={3} justifyContent="space-evenly" maxWidth="100%">
          {config?.slice(row * 3, row * 3 + 3).map((item) => {
            const IconComponent = MUIIcons[item.icon];
            return (
              <Card key={item.id} sx={{ borderRadius: 2, width: 330, textAlign: "center", paddingX: 0, boxShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}>
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
                        backgroundColor: item.backgroundColor,
                        color: item.color
                      }}
                    >
                      <IconComponent />
                    </Box>
                    <Typography fontFamily={style.fontFamily} fontWeight="600" fontSize={"16px"} sx={{ color: item.color }}>
                      {item.title}
                    </Typography>
                  </Stack>
                  <Typography fontFamily={style.fontFamily} fontSize={"50px"} variant="h4" sx={{ fontWeight: "700", mt: 3, textAlign: "right" }}>
                    {item.count}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      ))}
    </Stack>
  );
};

export default DashboardMenuOperator;