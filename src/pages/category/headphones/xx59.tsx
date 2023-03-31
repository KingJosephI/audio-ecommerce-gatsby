import React from "react";
import { ProductCategoryLayout, RelatedProducts } from "../../../common";
import { Typography } from "@mui/material";
import image1 from "../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import image2 from "../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import image3 from "../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

export default function Xx99One() {
  return (
    <ProductCategoryLayout>
      <Typography>Go back</Typography>
      <h1>XX59 Headphones</h1>
      <RelatedProducts />
    </ProductCategoryLayout>
  );
}
