import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Products.module.scss";

export default function Products() {
  return (
    <Box className={styles.products}>
      <Box className={styles.products__first}>
        <Box>
          <StaticImage
            src="../../assets/home/desktop/image-speaker-zx9.png"
            alt=""
          />
        </Box>
        <Box>
          <Typography>ZX9 speaker</Typography>
          <Typography>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Typography>
          <Button variant="text">See product</Button>
        </Box>
      </Box>
      {/* <Box className={styles.products__second}> */}
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
        {/* </Box> */}
      </Box>
      <Box className={styles.products__third}>
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
