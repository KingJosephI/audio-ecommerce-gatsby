import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Button, ListItem, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Layout from "../common/Layout/Layout";
import AudioGearSection from "../common/AudioGearSection/AudioGearSection";

export default function Homepage() {
  return (
    <Layout>
      <Box component="header">
        <Box component="nav">
          <MenuIcon />
          <StaticImage src="../assets/shared/desktop/logo.svg" alt="" />
          <Box component="ul">
            <ListItem component="li">
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem component="li">
              <Link to="/headphones">Headphones</Link>
            </ListItem>
            <ListItem component="li">
              <Link to="/speakers">Speakers</Link>
            </ListItem>
            <ListItem component="li">
              <Link to="/earphones">Earphones</Link>
            </ListItem>
          </Box>
          <StaticImage
            src="../assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
          />
        </Box>
      </Box>
      <Stack component="main">
        <Box component="section">
          <Typography component="span">New product</Typography>
          <Typography component="h1">XX99 Mark II Headphones</Typography>
          <Typography component="p">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>

          <Button variant="contained">See product</Button>
        </Box>
        <Stack>
          <Box>
            <Typography>Headphones</Typography>
            <Button variant="text">Shop</Button>
          </Box>

          <Box>
            <Typography>Speakers</Typography>
            <Button variant="text">Shop</Button>
          </Box>
          <Box>
            <Typography>Earphones</Typography>
            <Button variant="text">Shop</Button>
          </Box>
        </Stack>

        <Stack>
          <Box>
            <StaticImage
              src="../assets/home/desktop/image-speaker-zx9.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography>ZX9 speaker</Typography>
            <Typography>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
            <Button variant="text">See product</Button>
          </Box>
        </Stack>

        <Box>
          <Typography>ZX7 speaker</Typography>
          <Button variant="text">See product</Button>
        </Box>

        <Stack>
          <Box>
            <StaticImage
              src="../assets/home/desktop/image-earphones-yx1.jpg"
              alt=""
            />
          </Box>
          <Box>
            <Typography>YX1 earphones</Typography>
            <Button variant="text">See product</Button>
          </Box>
        </Stack>

        <AudioGearSection />
      </Stack>
    </Layout>
  );
}
