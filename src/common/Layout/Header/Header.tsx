import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box component="header">
      <Box component="nav">
        <MenuIcon />
        <StaticImage src="../assets/shared/desktop/logo.svg" alt="" />
        <Box component="ul">
          <Typography component="li">
            <Link to="/">Home</Link>
          </Typography>
          <Typography component="li">
            <Link to="/headphones">Headphones</Link>
          </Typography>
          <Typography component="li">
            <Link to="/speakers">Speakers</Link>
          </Typography>
          <Typography component="li">
            <Link to="/earphones">Earphones</Link>
          </Typography>
        </Box>
        <StaticImage
          src="../../../assets/shared/desktop/icon-cart.svg"
          alt="cart icon"
        />
      </Box>
    </Box>
  );
}
