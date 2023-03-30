import * as React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import * as styles from "./Banner.module.scss";

interface IBanner extends BoxProps {
  title?: string;
}

export default function Banner({ title = "Product Categry" }: IBanner) {
  return (
    <Box className={styles.banner}>
      <Typography component="h1" className={styles.banner__title}>
        {title}
      </Typography>
    </Box>
  );
}
