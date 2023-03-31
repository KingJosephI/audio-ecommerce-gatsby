import * as React from "react";
import { Box } from "@mui/material";
import { Banner, ProductCard, ProductCategoryLayout } from "../../../common";
import yx1EarphoneMobile from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1EarphoneTablet from "../../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1EarphoneDesktop from "../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import * as styles from "../Category.module.scss";

export default function Earphones() {
  const earphones = [
    {
      title: "YX1 WIRELESS EARPHONES",
      description: `Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.`,
      image: {
        mobile: yx1EarphoneMobile,
        tablet: yx1EarphoneTablet,
        desktop: yx1EarphoneDesktop,
      },
      url: "/category/earphones/yx1",
    },
  ];

  return (
    <ProductCategoryLayout>
      <Banner title="Earphones" />
      <Box className={styles.earphoneContainer}>
        <ProductCard
          imageMobile={earphones[0].image.mobile}
          imageTablet={earphones[0].image.tablet}
          imageDesktop={earphones[0].image.desktop}
          title={earphones[0].title}
          description={earphones[0].description}
          goToUrl={earphones[0].url}
          newProductLabel="NEW PRODUCT"
        />
      </Box>
    </ProductCategoryLayout>
  );
}
