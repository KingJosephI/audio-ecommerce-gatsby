import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <span className={styles.footer__topLine}></span>
      <Box className={styles.footer__logoContainer}>
        <StaticImage
          className={styles.footer__logo}
          src="../../../assets/shared/desktop/logo.svg"
          alt="logo"
        />
      </Box>
      <Stack component="ul" className={styles.footer__links}>
        <Typography component="li" className={styles.footer__linksItem}>
          <Link to="/">Home</Link>
        </Typography>
        <Typography component="li" className={styles.footer__linksItem}>
          <Link to="/speakers">Speakers</Link>
        </Typography>
        <Typography component="li" className={styles.footer__linksItem}>
          <Link to="/headphones">Headphones</Link>
        </Typography>
        <Typography component="li" className={styles.footer__linksItem}>
          <Link to="/earphones">Earphones</Link>
        </Typography>
      </Stack>
      <Typography component="p" className={styles.footer__description}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </Typography>
      <Typography component="small" className={styles.footer__copyright}>
        Copyright 2021. All Rights Reserved
      </Typography>
      <Stack className={styles.footer__socialIcons} direction="row" spacing={2}>
        <Link to="#">
          <FacebookIcon className={styles.footer__icon} />
        </Link>
        <Link to="#">
          <TwitterIcon className={styles.footer__icon} />
        </Link>
        <Link to="#">
          <InstagramIcon className={styles.footer__icon} />
        </Link>
      </Stack>
    </Box>
  );
}
