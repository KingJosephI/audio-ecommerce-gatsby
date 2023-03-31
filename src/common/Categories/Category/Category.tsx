import React from "react";
import { Box, BoxProps, Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as styles from "./Category.module.scss";

interface ICategory extends BoxProps {
  goTo: string;
  title: string;
  image: string;
}

export default function Category({
  title = "",
  image = "",
  goTo = "",
}: ICategory) {
  return (
    <Box className={styles.category}>
      <img src={image} alt={title} className={styles.category__image} />
      <Typography className={styles.category__title}>{title}</Typography>
      <Link to={goTo}>
        <Button
          className={styles.category__shopButton}
          variant="text"
          endIcon={
            <ChevronRightIcon className={styles.category__chevronIcon} />
          }
        >
          Shop
        </Button>
      </Link>
    </Box>
  );
}
