import React from "react";
import { Box, BoxProps } from "@mui/material";
import * as styles from "./Gallery.module.scss";

interface IPicture {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface IGallery extends BoxProps {
  images: IPicture[];
}

export default function Gallery({ images }: IGallery) {
  return (
    <Box className={styles.gallery}>
      <Box className={styles.gallery__pic1}>
        <picture>
          <source media="(min-width:1024px)" srcSet={images[0].desktop} />
          <source media="(min-width:768px)" srcSet={images[0].tablet} />
          <img src={images[0].mobile} alt="" />
        </picture>
      </Box>
      <Box className={styles.gallery__pic2}>
        <picture>
          <source media="(min-width:1024px)" srcSet={images[1].desktop} />
          <source media="(min-width:768px)" srcSet={images[1].tablet} />
          <img src={images[1].mobile} alt="" />
        </picture>
      </Box>
      <Box className={styles.gallery__pic3}>
        <picture>
          <source media="(min-width:1024px)" srcSet={images[2].desktop} />
          <source media="(min-width:768px)" srcSet={images[2].tablet} />
          <img src={images[2].mobile} alt="" />
        </picture>
      </Box>
    </Box>
  );
}
