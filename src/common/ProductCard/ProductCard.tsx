import * as React from "react";
import { Box, Button, Stack, StackProps, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as styles from "./ProductCard.module.scss";

interface IProductCard extends StackProps {
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
  title: string;
  description: string;
  newProductLabel?: string;
  goToUrl: string;
}

export default function ProductCard({
  imageMobile = "",
  imageTablet = "",
  imageDesktop = "",
  title = "",
  description = "",
  newProductLabel = "NEW PRODUCT",
  goToUrl = "",
}: IProductCard) {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      // console.log(screenWidth);
    });
  }, [window.innerWidth]);
  return (
    <Stack
      className={styles.card}
      direction={screenWidth >= 1024 ? "row" : "column"}
    >
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
    </Stack>
  );
}
