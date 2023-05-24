import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbRectangle } from "react-icons/tb";

const InvestmentSummary = ({ quantity, avgCost, investedAmount }) => {
  return (
    <>
      <Card sx={{ minWidth: 320, maxWidth: 320, backgroundColor: "#ededed" }}>
        <CardContent sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "60%",
              gap: 1,
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <MdAccountBalanceWallet />
              Quantity
            </Typography>
            <Typography>@Avg. Cost</Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <TbRectangle />
              Invested Amt
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "800" }}>{quantity}</Typography>
            <Typography sx={{ fontWeight: "800" }}>{avgCost}</Typography>
            <Typography sx={{ fontWeight: "800" }}>{investedAmount}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default InvestmentSummary;
