import React from "react";
import {
  Gallery,
  ProductCardPriced,
  ProductCategoryLayout,
  RelatedProducts,
} from "../../../common";
import { Box, Typography } from "@mui/material";
import gal1D from "../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import gal2D from "../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import gal3D from "../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import gal1T from "../../../assets/product-zx9-speaker/tablet/image-gallery-1.jpg";
import gal2T from "../../../assets/product-zx9-speaker/tablet/image-gallery-2.jpg";
import gal3T from "../../../assets/product-zx9-speaker/tablet/image-gallery-3.jpg";
import gal1M from "../../../assets/product-zx9-speaker/mobile/image-gallery-1.jpg";
import gal2M from "../../../assets/product-zx9-speaker/mobile/image-gallery-2.jpg";
import gal3M from "../../../assets/product-zx9-speaker/mobile/image-gallery-3.jpg";

import productImageD from "../../../assets/product-zx9-speaker/desktop/image-product.jpg";
import productImageT from "../../../assets/product-zx9-speaker/tablet/image-product.jpg";
import productImageM from "../../../assets/product-zx9-speaker/mobile/image-product.jpg";

import * as styles from "../Category.module.scss";

export default function Xx99One() {
  const images = [
    { desktop: gal1D, tablet: gal1T, mobile: gal1M },
    { desktop: gal2D, tablet: gal2T, mobile: gal2M },
    { desktop: gal3D, tablet: gal3T, mobile: gal3M },
  ];
  return (
    <ProductCategoryLayout>
      <Typography>Go back</Typography>
      <ProductCardPriced
        title="ZX9 SPEAKER"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        price={4500}
        image={{
          mobile: productImageM,
          tablet: productImageT,
          desktop: productImageD,
        }}
        goToUrl="#"
        newProductLabel="NEW PRODUCT"
      />
      <Gallery images={images} />
      <RelatedProducts />
    </ProductCategoryLayout>
  );
}
