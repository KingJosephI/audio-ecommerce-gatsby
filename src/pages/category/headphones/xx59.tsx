import * as React from "react";
import {
  Gallery,
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
      <Gallery images={images} />
      <RelatedProducts />
    </ProductCategoryLayout>
  );
}
