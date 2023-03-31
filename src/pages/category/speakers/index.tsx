import * as React from "react";
import { Box } from "@mui/material";
import { Banner, ProductCard, ProductCategoryLayout } from "../../../common";

import zx7Desktop from "../../../assets/product-zx7-speaker/desktop/image-product.jpg";
import zx7Tablet from "../../../assets/product-zx7-speaker/tablet/image-product.jpg";
import zx7Mobile from "../../../assets/product-zx7-speaker/mobile/image-product.jpg";

import zx9Desktop from "../../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx9Tablet from "../../../assets/product-zx9-speaker/tablet/image-product.jpg";
import zx9Mobile from "../../../assets/product-zx9-speaker/mobile/image-product.jpg";

import useWindowWidth from "../../../hooks/useWindowWidth";

import * as styles from "../Category.module.scss";

export default function Earphones() {
  const screenWidth = useWindowWidth();

  const speakers = [
    {
      title: "ZX9 SPEAKER",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image: { mobile: zx9Desktop, tablet: zx9Tablet, desktop: zx9Mobile },
      url: "/category/speakers/zx9",
    },
    {
      title: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image: { mobile: zx7Mobile, tablet: zx7Tablet, desktop: zx7Desktop },
      url: "/category/speakers/zx7",
    },
  ];

  return (
    <ProductCategoryLayout>
      <Banner title="Speakers" />
      <Box className={styles.speakersContainer}>
        <ProductCard
          imageMobile={speakers[0].image.mobile}
          imageTablet={speakers[0].image.tablet}
          imageDesktop={speakers[0].image.desktop}
          title={speakers[0].title}
          description={speakers[0].description}
          goToUrl={speakers[0].url}
          newProductLabel="NEW PRODUCT"
        />
        <ProductCard
          imageMobile={speakers[1].image.mobile}
          imageTablet={speakers[1].image.tablet}
          imageDesktop={speakers[1].image.desktop}
          title={speakers[1].title}
          description={speakers[1].description}
          goToUrl={speakers[1].url}
          sx={{ flexDirection: screenWidth >= 900 ? "row-reverse" : "row" }}
        />
      </Box>
    </ProductCategoryLayout>
  );
}
