import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import bestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import * as styles from "./AudioGearSection.module.scss";

export default function AudioGearSection() {
  return (
    <Stack className={styles.audioGear}>
      <Box className={styles.audioGear__imageContainer}>
        <picture>
          <source media="(min-width:1024px)" srcSet={bestGearDesktop} />
          <source media="(min-width:768px)" srcSet={bestGearTablet} />
          <img src={bestGearMobile} alt="Audio Gear Section" />
        </picture>
      </Box>
      <Box className={styles.audioGear__content}>
        <Typography component="h2" className={styles.audioGear__title}>
          Bringing you the <span>best</span> audio gear
        </Typography>
        <Typography component="p" className={styles.audioGear__description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </Box>
    </Stack>
  );
}
