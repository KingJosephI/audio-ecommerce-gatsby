import * as React from "react";
import { Link } from "gatsby";
import { Box, Button, BoxProps, Typography } from "@mui/material";
import * as styles from "./ProductCard.module.scss";

interface IProductCard extends BoxProps {
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
  title: string;
  description: string;
  newProductLabel?: string;
  goToUrl: string;
  sx?: object;
}

export default function ProductCard({
  imageMobile = "",
  imageTablet = "",
  imageDesktop = "",
  title = "",
  description = "",
  newProductLabel = "",
  goToUrl = "",
  sx,
}: IProductCard) {
  return (
    <Box className={styles.card} sx={sx}>
      <Box className={styles.card__imageContainer}>
        <picture>
          <source media="(min-width:1024px)" srcSet={imageDesktop} />
          <source media="(min-width:768px)" srcSet={imageTablet} />
          <img
            src={imageMobile}
            className={styles.card__imageContainer_image}
            alt=""
          />
        </picture>
      </Box>
      <Box className={styles.card__details}>
        <Typography className={styles.card__newProductLabel} component="span">
          {newProductLabel}
        </Typography>
        <Typography className={styles.card__title} component="h2">
          {title}
        </Typography>
        <Typography className={styles.card__description} component="p">
          {description}
        </Typography>
        <Link to={goToUrl}>
          <Button className={styles.card__button} variant="contained">
            SEE PRODUCT
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
