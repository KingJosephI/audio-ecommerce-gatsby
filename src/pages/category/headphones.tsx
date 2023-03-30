import * as React from "react";
import { AudioGearSection, Banner, Categories, Layout } from "../../common";

export default function Earphones() {
  return (
    <Layout>
      <Banner title="Headphones" />
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
