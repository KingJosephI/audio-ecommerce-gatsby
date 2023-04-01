import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
  Gallery,
  Goback,
  ProductCardPriced,
  ProductCategoryLayout,
  RelatedProducts,
} from "../../../common";
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
import productImageD from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import productImageT from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import productImageM from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

export default function XX99One() {
  const images = [
    { desktop: gal1D, tablet: gal1T, mobile: gal1M },
    { desktop: gal2D, tablet: gal2T, mobile: gal2M },
    { desktop: gal3D, tablet: gal3T, mobile: gal3M },
  ];
  return (
    <ProductCategoryLayout>
      <Goback />
      <ProductCardPriced
        image={{
          mobile: productImageM,
          tablet: productImageT,
          desktop: productImageD,
        }}
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        price={2.999}
        goToUrl="#"
        newProductLabel="NEW PRODUCT"
      />
      <Gallery images={images} />
      <RelatedProducts />
    </ProductCategoryLayout>
  );
}
