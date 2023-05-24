import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Buttons = () => {
  return (
    <>
      <Card
        sx={{
          minWidth: 125,
          maxWidth: 125,
          backgroundColor: "#ededed",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Button sx={{ color: "red", borderColor: "red" }} variant="outlined">
            BUY
          </Button>
          <Button sx={{ color: "red", borderColor: "red" }} variant="outlined">
            SELL
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Buttons;
