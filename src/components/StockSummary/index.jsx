import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StockSummary = ({ scrip, price }) => {
  return (
    <>
      <Card sx={{ minWidth: 320, maxWidth: 320, backgroundColor: "#ededed" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: 25 }}>
            <RxHamburgerMenu />
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: 15,
                color: "#ced2d5",
                textAlign: "center",
              }}
            >
              {scrip}
            </Typography>
            <Typography sx={{ fontSize: 20, color: "#7c979b" }}>
              {price}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 25, color: "#aeb69c" }}>
              iShares
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                color: "black",
                textAlign: "center",
              }}
            >
              by BlackRock
            </Typography>
            <Typography sx={{ fontSize: 18, color: "black" }}>
              S&P 500 Index
            </Typography>
            <Typography sx={{ fontSize: 12, color: "black" }}>
              US Equality
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default StockSummary;
