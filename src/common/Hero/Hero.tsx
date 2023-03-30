import * as React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box component="section">
      <Typography component="span">New product</Typography>
      <Typography component="h1">XX99 Mark II Headphones</Typography>
      <Typography component="p">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Typography>

      <Button variant="contained">See product</Button>
    </Box>
  );
}
