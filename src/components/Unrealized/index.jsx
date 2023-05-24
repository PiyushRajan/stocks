import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Unrealized = ({ unrealized_PL, returnPercentage }) => {
  const isPositive = returnPercentage > 0;

  return (
    <>
      <Card sx={{ minWidth: 320, maxWidth: 320, backgroundColor: "#ededed" }}>
        <CardContent sx={{}}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
              unrealized P/L
            </Typography>
            <Typography sx={{ fontSize: 22 }}>{unrealized_PL}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#8a8a8a", fontSize: 14 }}>
              % of portfolio value
            </Typography>
            <Typography
              sx={{
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 70,
              }}
            >
              {isPositive ? (
                <IoMdArrowDropup style={{ color: "#486838" }} />
              ) : (
                <IoMdArrowDropdown style={{ color: "red" }} />
              )}
              {returnPercentage}%
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: 275,
              height: 13,
              backgroundColor: "#d1d1d1",
              marginTop: 1,
            }}
          >
            <Box
              sx={{
                width: `${Math.abs(returnPercentage)}%`,
                backgroundColor: returnPercentage > 0 ? "" : "red",
                borderRight: "1px solid black",
              }}
            ></Box>
            <Box
              sx={{
                width: `${Math.abs(returnPercentage)}%`,
                backgroundColor: returnPercentage > 0 ? "green" : "",
              }}
            ></Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Unrealized;
