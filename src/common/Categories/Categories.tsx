import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Categories() {
  return (
    <Stack>
      <Box>
        <Typography>Headphones</Typography>
        <Button variant="text">Shop</Button>
      </Box>

      <Box>
        <Typography>Speakers</Typography>
        <Button variant="text">Shop</Button>
      </Box>
      <Box>
        <Typography>Earphones</Typography>
        <Button variant="text">Shop</Button>
      </Box>
    </Stack>
  );
}
