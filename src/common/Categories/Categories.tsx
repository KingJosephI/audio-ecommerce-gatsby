import * as React from "react";
import { Stack } from "@mui/material";
import Category from "./Category/Category";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import * as styles from "./Categories.module.scss";

export default function Categories() {
  return (
    <Stack className={styles.categories}>
      <Category
        title="Headphones"
        image={headphones}
        goTo="/category/headphones"
      />
      <Category title="Speakers" image={speakers} goTo="/category/speakers" />

      <Category
        title="Earphones"
        image={earphones}
        goTo="/category/earphones"
      />
    </Stack>
  );
}
