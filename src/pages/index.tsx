import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Button, ListItem, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

export default function Homepage() {
  return (
    <Box>
      <Box component="header">
        <Box component="nav">
          <MenuIcon />
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

        <Stack>
          <Box>
            <StaticImage
              src="../assets/shared/desktop/image-best-gear.jpg"
              alt=""
            />
          </Box>
          <Box>
            <Typography component="h2">
              Bringing you the best audio gear
            </Typography>
            <Typography component="p">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Box component="footer" className="footer">
        <Box className="footer__logo-container">
          <StaticImage src="../assets/shared/desktop/logo.svg" alt="logo" />
        </Box>
        <Stack component="ul">
          <ListItem component="li">
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem component="li">
            <Link to="/speakers">Speakers</Link>
          </ListItem>
          <ListItem component="li">
            <Link to="/headphones">Headphones</Link>
          </ListItem>
          <ListItem component="li">
            <Link to="/earphones">Earphones</Link>
          </ListItem>
        </Stack>
        <Typography component="p">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Typography>
        <Typography component="small">
          Copyright 2021. All Rights Reserved
        </Typography>
        <Box>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
}
