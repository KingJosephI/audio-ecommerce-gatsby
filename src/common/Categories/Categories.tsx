import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Categories.module.scss";

export default function Categories() {
  return (
    <Stack className={styles.categories}>
      <Box className={styles.category}>
        <StaticImage
          src="../../assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="Headphones"
          className={styles.category__image}
        />
        <Typography className={styles.category__title}>Headphones</Typography>
        <Button
          className={styles.category__shopButton}
          variant="text"
          endIcon={
            <ChevronRightIcon className={styles.category__chevronIcon} />
          }
        >
          Shop
        </Button>
      </Box>

      <Box className={styles.category}>
        <StaticImage
          src="../../assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="Speakers"
          className={styles.category__image}
        />

        <Typography className={styles.category__title}>Speakers</Typography>
        <Button
          className={styles.category__shopButton}
          variant="text"
          endIcon={
            <ChevronRightIcon className={styles.category__chevronIcon} />
          }
        >
          Shop
        </Button>
      </Box>
      <Box className={styles.category}>
        <StaticImage
          src="../../assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="Earphones"
          className={styles.category__image}
        />

        <Typography className={styles.category__title}>Earphones</Typography>
        <Button
          className={styles.category__shopButton}
          variant="text"
          endIcon={
            <ChevronRightIcon className={styles.category__chevronIcon} />
          }
        >
          Shop
        </Button>
      </Box>
    </Stack>
  );
}
