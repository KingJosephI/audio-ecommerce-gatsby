import * as React from "react";
import { Layout, AudioGearSection, Categories, Banner } from "../index";

interface IProductCategory {
  children?: React.ReactNode;
}

export default function ProductCategoryLayout({ children }: IProductCategory) {
  return (
    <Layout>
      {/* <Banner title={title} /> */}
      {children}
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
