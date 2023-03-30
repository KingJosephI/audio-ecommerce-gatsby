import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MenuIcon from "@mui/icons-material/Menu";
import * as styles from "./Header.module.scss";

export default function Header() {
  return (
    <Box component="header" className={styles.header}>
      <Box component="nav">
        <MenuIcon className={styles.header__hamburger} />
        <Box>
          <StaticImage
            className={styles.header__logo}
            src="../../../assets/shared/desktop/logo.svg"
            alt="logo"
          />
        </Box>
        <Box component="ul" className={styles.header__menu}>
          <Typography component="li" className={styles.header__menuItem}>
            <Link to="/" className={styles.header__menuItem_text}>
              Home
            </Link>
          </Typography>
          <Typography component="li" className={styles.header__menuItem}>
            <Link to="/headphones" className={styles.header__menuItem_text}>
              Headphones
            </Link>
          </Typography>
          <Typography component="li" className={styles.header__menuItem}>
            <Link to="/speakers" className={styles.header__menuItem_text}>
              Speakers
            </Link>
          </Typography>
          <Typography component="li" className={styles.header__menuItem}>
            <Link to="/earphones" className={styles.header__menuItem_text}>
              Earphones
            </Link>
          </Typography>
        </Box>
        <Box>
          <StaticImage
            src="../../../assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
            className={styles.header__cart}
          />
        </Box>
      </Box>
    </Box>
  );
}
