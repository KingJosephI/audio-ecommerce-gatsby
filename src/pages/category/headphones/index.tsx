import * as React from "react";
import { Box } from "@mui/material";
import { Banner, ProductCard, ProductCategoryLayout } from "../../../common";
import xx59Desktop from "../../../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx59Tablet from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import xx59Mobile from "../../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx991Desktop from "../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx991Tablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx991Mobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx992Desktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx992Tablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx992Mobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import useWindowWidth from "../../../hooks/useWindowWidth";
import * as styles from "../Category.module.scss";

export default function Earphones() {
  const screenWidth = useWindowWidth();

  const headphones = [
    {
      title: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: {
        mobile: xx992Mobile,
        tablet: xx992Tablet,
        desktop: xx992Desktop,
      },
      url: "/category/headphones/xx99Two",
    },
    {
      title: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      image: {
        mobile: xx991Mobile,
        tablet: xx991Tablet,
        desktop: xx991Desktop,
      },
      url: "/category/headphones/xx99One",
    },
    {
      title: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: {
        mobile: xx59Mobile,
        tablet: xx59Tablet,
        desktop: xx59Desktop,
      },
      url: "/category/headphones/xx59",
    },
  ];

  return (
    <ProductCategoryLayout>
      <Banner title="Headphones" />
      <Box className={styles.headphonesContainer}>
        <ProductCard
          imageMobile={headphones[0].image.mobile}
          imageTablet={headphones[0].title}
          imageDesktop={headphones[0].title}
          title={headphones[0].title}
          description={headphones[0].description}
          goToUrl={headphones[0].url}
          newProductLabel="NEW PRODUCT"
        />
        <ProductCard
          imageMobile={headphones[1].image.mobile}
          imageTablet={headphones[1].image.mobile}
          imageDesktop={headphones[1].image.mobile}
          title={headphones[1].title}
          description={headphones[1].description}
          goToUrl={headphones[1].url}
          sx={{ flexDirection: screenWidth >= 900 ? "row-reverse" : "row" }}
        />
        <ProductCard
          imageMobile={headphones[2].image.mobile}
          imageTablet={headphones[2].image.mobile}
          imageDesktop={headphones[2].image.mobile}
          title={headphones[2].title}
          description={headphones[2].description}
          goToUrl={headphones[2].url}
        />
      </Box>
    </ProductCategoryLayout>
  );
}
