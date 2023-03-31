import React from "react";
import { Box, BoxProps, Button, Typography } from "@mui/material";
import * as styles from "./RelatedCard.module.scss";

interface IRelatedCard extends BoxProps {
  title: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export default function RelatedCard({ image, title }: IRelatedCard) {
  return (
    <Box className={styles.card}>
      <Box className={styles.card__image}>
        <picture>
          <source media="(min-width:1024px)" srcSet={image.desktop} />
          <source media="(min-width:768px)" srcSet={image.tablet} />
          <img src={image.mobile} alt="" />
        </picture>
      </Box>
      <Box className={styles.card__details}>
        <Typography className={styles.card__title} component="h3">
          {title}
        </Typography>
        <Button className={styles.card__button} variant="contained">
          See product
        </Button>
      </Box>
    </Box>
  );
}
