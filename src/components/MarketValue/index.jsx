import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/system";

const MarketValue = ({ marketValue, portfolio }) => {
  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: "#486838",
    "& .MuiSlider-rail": {
      backgroundColor: "#b9cbb0",
      height: 8,
    },
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-track": {
      backgroundColor: "#486838",
      height: 8,
      borderRadius: "4px 0 0 4px",
    },
  }));

  return (
    <>
      <Card sx={{ minWidth: 320, maxWidth: 320, backgroundColor: "#ededed" }}>
        <CardContent sx={{}}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
              Market Value
            </Typography>
            <Typography sx={{ fontSize: 22 }}>{marketValue}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#8a8a8a", fontSize: 14 }}>
              % of portfolio value
            </Typography>
            <Typography sx={{ fontWeight: 800 }}>{portfolio}%</Typography>
          </Box>
          <Box width={290}>
            <CustomSlider defaultValue={portfolio} disabled />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default MarketValue;
