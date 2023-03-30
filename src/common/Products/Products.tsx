import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import zx9Desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import zx9Tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import zx9Mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import * as styles from "./Products.module.scss";

export default function Products() {
  return (
    <Box className={styles.products}>
      <Box className={styles.products__zX9Speaker}>
        <Box className={styles.products__zX9Speaker_imageContainer}>
          <picture>
            <source media="(min-width:1024px)" srcSet={zx9Desktop} />
            <source media="(min-width:768px)" srcSet={zx9Tablet} />
            <img
              src={zx9Mobile}
              alt="ZX9 Speaker"
              className={styles.products__zX9Speaker_image}
            />
          </picture>
        </Box>
        <Box className={styles.products__zX9Speaker_content}>
          <Typography className={styles.products__zX9Speaker_title}>
            ZX9 speaker
          </Typography>
          <Typography className={styles.products__zX9Speaker_description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Typography>
          <Button
            variant="text"
            className={`${styles.button} ${styles.products__zX9Speaker_button}`}
          >
            See product
          </Button>
        </Box>
      </Box>
      <Box className={`${styles.products__zX7Speaker}`}>
        <Typography
          className={`
          ${styles.products__zX7Speaker_title} 
          ${styles.title}`}
          component="h2"
        >
          ZX7 speaker
        </Typography>
        <Button
          variant="text"
          className={`
            ${styles.products__zX7Speaker_button} 
            ${styles.button}
          `}
        >
          See product
        </Button>
      </Box>
      <Box className={styles.products__yx1Earphones}>
        <Box className={styles.products__yx1ImageContainer}>
          <StaticImage
            src="../../assets/home/desktop/image-earphones-yx1.jpg"
            alt=""
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Box className={styles.products__yx1Description}>
          <Typography
            className={`${styles.products__yx1Description_title} ${styles.title}`}
            component="h2"
          >
            YX1 earphones
          </Typography>
          <Button
            className={`${styles.products__yx1Description_button} ${styles.button}`}
            variant="text"
          >
            See product
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
