import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import * as styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <Box component="section" className={styles.hero}>
      <Typography component="span" className={styles.hero__intro}>
        New product
      </Typography>
      <Typography component="h1" className={styles.hero__title}>
        XX99 Mark II Headphones
      </Typography>
      <Typography component="p" className={styles.hero__description}>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Typography>

      <Button variant="contained" className={styles.hero__button}>
        See product
      </Button>
    </Box>
  );
}
