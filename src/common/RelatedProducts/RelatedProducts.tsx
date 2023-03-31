import * as React from "react";
import { Box, Typography } from "@mui/material";
import xx59M from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx59T from "../../assets/product-xx59-headphones/tablet/image-product.jpg";
import xx59D from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx99M1M from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx99M1T from "../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx99M1D from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99M2M from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx99M2T from "../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx99M2D from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

import * as styles from "./RelatedProducts.module.scss";
import RelatedCard from "./RelatedCard/RelatedCard";

export default function RelatedProducts() {
  return (
    <Box className={styles.relatedProducts}>
      <Typography className={styles.relatedProducts__title} component="h2">
        You may also like
      </Typography>
      <Box className={styles.relatedProducts__card__container}>
        <RelatedCard
          title="ZX9"
          image={{
            desktop: xx59D,
            tablet: xx59T,
            mobile: xx59M,
          }}
        />
        <RelatedCard
          title="XX99 Mark I"
          image={{
            desktop: xx99M1D,
            tablet: xx99M1T,
            mobile: xx99M1M,
          }}
        />

        <RelatedCard
          title="XX99 Mark II"
          image={{
            desktop: xx99M2D,
            tablet: xx99M2T,
            mobile: xx99M2M,
          }}
        />
      </Box>
      {/* <Box>
        <Box>
          <picture>
            <source media="(min-width:1024px)" srcSet={xx99M1D} />
            <source media="(min-width:768px)" srcSet={xx99M1T} />
            <img src={xx99M1M} alt="" />
          </picture>
        </Box>
        <Box>
          <Typography component="h3">XX99 MARK I</Typography>
          <Button variant="contained">See product</Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <picture>
            <source media="(min-width:1024px)" srcSet={xx59M} />
            <source media="(min-width:768px)" srcSet={xx59T} />
            <img src={xx59D} alt="" />
          </picture>
        </Box>
        <Box>
          <Typography component="h3">XX59</Typography>
          <Button variant="contained">See product</Button>
        </Box>
      </Box> */}
    </Box>
  );
}
