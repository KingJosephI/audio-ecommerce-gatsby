import * as React from "react";
import { Box, Typography } from "@mui/material";
import { ProductCategoryLayout, RelatedProducts } from "../../../common";
import * as styles from "../Category.module.scss";
import gal1D from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import gal2D from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import gal3D from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import gal1T from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import gal2T from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import gal3T from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import gal1M from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import gal2M from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import gal3M from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

export default function XX99One() {
  return (
    <ProductCategoryLayout>
      <Typography>Go back</Typography>
      <h1>XX99 Two</h1>
      <Box className={styles.gallery}>
        <Box className={styles.gallery__pic1}>
          <picture>
            <source media="(min-width:1024px)" srcSet={gal1D} />
            <source media="(min-width:768px)" srcSet={gal1T} />
            <img src={gal1M} alt="" />
          </picture>
        </Box>
        <Box className={styles.gallery__pic2}>
          <picture>
            <source media="(min-width:1024px)" srcSet={gal2D} />
            <source media="(min-width:768px)" srcSet={gal2T} />
            <img src={gal2M} alt="" />
          </picture>
        </Box>
        <Box className={styles.gallery__pic3}>
          <picture>
            <source media="(min-width:1024px)" srcSet={gal3D} />
            <source media="(min-width:768px)" srcSet={gal3T} />
            <img src={gal3M} alt="" />
          </picture>
        </Box>
      </Box>
      <RelatedProducts />
    </ProductCategoryLayout>
  );
}
