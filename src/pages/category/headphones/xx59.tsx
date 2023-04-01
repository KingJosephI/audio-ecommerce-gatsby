import * as React from "react";
import {
  Gallery,
  Goback,
  ProductCardPriced,
  ProductCategoryLayout,
  RelatedProducts,
} from "../../../common";
import { Box, Typography } from "@mui/material";
import gal1D from "../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import gal2D from "../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import gal3D from "../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import gal1T from "../../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import gal2T from "../../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import gal3T from "../../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg";
import gal1M from "../../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import gal2M from "../../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import gal3M from "../../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";
import productImageD from "../../../assets/product-xx59-headphones/desktop/image-product.jpg";
import productImageT from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import productImageM from "../../../assets/product-xx59-headphones/mobile/image-product.jpg";

import * as styles from "../Category.module.scss";

export default function Xx99One() {
  const images = [
    { desktop: gal1D, tablet: gal1T, mobile: gal1M },
    { desktop: gal2D, tablet: gal2T, mobile: gal2M },
    { desktop: gal3D, tablet: gal3T, mobile: gal3M },
  ];

  return (
    <ProductCategoryLayout>
      <Goback />
      <ProductCardPriced
        title="XX59 Headphones"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        price={899}
        image={{
          mobile: productImageM,
          tablet: productImageT,
          desktop: productImageD,
        }}
        goToUrl="#"
        newProductLabel="NEW PRODUCT"
      />
      <Box className={styles.features}>
        <Box className={styles.features__details}>
          <Typography className={styles.features__title} component="h3">
            FEATURES
          </Typography>
          <Box className={styles.features__description}>
            <Typography>
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </Typography>
            <Typography>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.features__options}>
          <Typography className={styles.features__title}>in the box</Typography>
          <ul className={styles.features__list}>
            <li>
              <span className={styles.features__times}>1x</span>Headphone Unit
            </li>
            <li>
              <span className={styles.features__times}>2x</span>Replacement
              Earcups
            </li>
            <li>
              <span className={styles.features__times}>1x</span>User Manual
            </li>
            <li>
              <span className={styles.features__times}>1x</span>3.5mm 5m Audio
              Cable
            </li>
          </ul>
        </Box>
      </Box>
      <Gallery images={images} />
      <RelatedProducts />
    </ProductCategoryLayout>
  );
}
