import * as React from "react";
import { Box } from "@mui/material";
import {
  AudioGearSection,
  Banner,
  Categories,
  Layout,
  ProductCard,
} from "../../common";
import zx7Desktop from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import zx7Tablet from "../../assets/product-zx7-speaker/tablet/image-product.jpg";
import zx7Mobile from "../../assets/product-zx7-speaker/mobile/image-product.jpg";

import zx9Desktop from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx9Tablet from "../../assets/product-zx9-speaker/tablet/image-product.jpg";
import zx9Mobile from "../../assets/product-zx9-speaker/mobile/image-product.jpg";

import * as styles from "./Category.module.scss";

export default function Earphones() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <Layout>
      <Banner title="Speakers" />
      <Box className={styles.speakersContainer}>
        <ProductCard
          imageMobile={zx9Desktop}
          imageTablet={zx9Tablet}
          imageDesktop={zx9Mobile}
          title="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          goToUrl="/"
          newProductLabel="NEW PRODUCT"
        />
        <ProductCard
          imageMobile={zx7Desktop}
          imageTablet={zx7Tablet}
          imageDesktop={zx7Mobile}
          title="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          goToUrl="/"
          sx={{ flexDirection: screenWidth >= 900 ? "row-reverse" : "row" }}
        />
      </Box>
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
