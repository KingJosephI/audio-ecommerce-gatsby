import * as React from "react";
import { Stack } from "@mui/material";
import {
  Layout,
  Hero,
  Categories,
  Products,
  AudioGearSection,
} from "../common";

export default function Homepage() {
  return (
    <Layout>
      <Stack component="main">
        <Hero />
        <Categories />
        <Products />
        <AudioGearSection />
      </Stack>
    </Layout>
  );
}
