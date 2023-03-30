import * as React from "react";
import { Box } from "@mui/material";
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
  return (
    <Layout>
      <Banner title="Earphones" />
      <Box className={styles.cardContainer}>
        <ProductCard
          imageMobile={yx1EarphoneMobile}
          imageTablet={yx1EarphoneTablet}
          imageDesktop={yx1EarphoneDesktop}
          title="YX1 WIRELESS EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature."
          goToUrl="/"
          newProductLabel="NEW PRODUCT"
        />
      </Box>
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
