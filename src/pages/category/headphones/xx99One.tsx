import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
  Gallery,
  ProductCardPriced,
  ProductCategoryLayout,
  RelatedProducts,
} from "../../../common";
import gal1D from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import gal2D from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import gal3D from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import gal1T from "../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import gal2T from "../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import gal3T from "../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";
import gal1M from "../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import gal2M from "../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import gal3M from "../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";
import productImageD from "../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import productImageT from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import productImageM from "../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
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
        title="XX99 Mark I Headphones"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
        price={1750}
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
