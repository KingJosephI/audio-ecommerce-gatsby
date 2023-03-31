import * as React from "react";
import { Box } from "@mui/system";
import {
  AudioGearSection,
  Banner,
  Categories,
  Layout,
  ProductCard,
} from "../../common";
import xx59Desktop from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx59Tablet from "../../assets/product-xx59-headphones/tablet/image-product.jpg";
import xx59Mobile from "../../assets/product-xx59-headphones/mobile/image-product.jpg";

import xx991Desktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx991Tablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx991Mobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

import xx992Desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx992Tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx992Mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

import * as styles from "./Category.module.scss";

export default function Earphones() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <Layout>
      <Banner title="Headphones" />
      <Box className={styles.headphonesContainer}>
        <ProductCard
          imageMobile={xx992Desktop}
          imageTablet={xx992Tablet}
          imageDesktop={xx992Mobile}
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          goToUrl="/"
          newProductLabel="NEW PRODUCT"
        />
        <ProductCard
          imageMobile={xx991Desktop}
          imageTablet={xx991Tablet}
          imageDesktop={xx991Mobile}
          title="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          goToUrl="/"
          sx={{ flexDirection: screenWidth >= 900 ? "row-reverse" : "row" }}
        />
        <ProductCard
          imageMobile={xx59Desktop}
          imageTablet={xx59Tablet}
          imageDesktop={xx59Mobile}
          title="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          goToUrl="/"
        />
      </Box>
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
