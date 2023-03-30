import * as React from "react";
import { Link } from "gatsby";
import { Box, Button, Typography } from "@mui/material";
import {
  AudioGearSection,
  Banner,
  Categories,
  Layout,
  ProductCard,
} from "../../common";
import yx1EarphoneMobile from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1EarphoneTablet from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1EarphoneDesktop from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import * as styles from "./Category.module.scss";

export default function Earphones() {
  // const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // React.useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setScreenWidth(window.innerWidth);
  //   });
  // }, [window.innerWidth]);
  return (
    <Layout>
      <Banner title="Earphones" />
      <Box className={styles.cardContainer}>
        <Box className={styles.card}>
          <Box className={styles.card__imageContainer}>
            <picture>
              <source media="(min-width:1024px)" srcSet={yx1EarphoneDesktop} />
              <source media="(min-width:768px)" srcSet={yx1EarphoneTablet} />
              <img
                src={yx1EarphoneMobile}
                className={styles.card__imageContainer_image}
                alt=""
              />
            </picture>
          </Box>
          <Box className={styles.card__details}>
            <Typography
              className={styles.card__newProductLabel}
              component="span"
            >
              NEW PRODUCT
            </Typography>
            <Typography className={styles.card__title} component="h2">
              YX1 WIRELESS EARPHONES
            </Typography>
            <Typography className={styles.card__description} component="p">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </Typography>
            <Link to={"/goToUrl"}>
              <Button className={styles.card__button} variant="contained">
                SEE PRODUCT
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
