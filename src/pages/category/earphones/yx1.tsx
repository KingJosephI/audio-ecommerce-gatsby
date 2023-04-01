import {
  Gallery,
  Goback,
  ProductCardPriced,
  ProductCategoryLayout,
  RelatedProducts,
} from "../../../common";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import gal1D from "../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import gal2D from "../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import gal3D from "../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import gal1T from "../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import gal2T from "../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import gal3T from "../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import gal1M from "../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg";
import gal2M from "../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import gal3M from "../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";

import productImageD from "../../../assets/product-yx1-earphones/desktop/image-product.jpg";
import productImageT from "../../../assets/product-yx1-earphones/tablet/image-product.jpg";
import productImageM from "../../../assets/product-yx1-earphones/mobile/image-product.jpg";
import * as styles from "../Category.module.scss";

export default function yx1() {
  const images = [
    { desktop: gal1D, tablet: gal1T, mobile: gal1M },
    { desktop: gal2D, tablet: gal2T, mobile: gal2M },
    { desktop: gal3D, tablet: gal3T, mobile: gal3M },
  ];
  return (
    <ProductCategoryLayout>
      <Goback />
      <ProductCardPriced
        title="YX1 WIRELESS EARPHONES"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        price={599}
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
