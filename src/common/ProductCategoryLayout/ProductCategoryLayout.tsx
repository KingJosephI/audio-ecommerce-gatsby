import * as React from "react";
import { Layout, Products, AudioGearSection } from "../index";

interface IProductCategory {
  children?: React.ReactNode;
}

export default function ProductCategoryLayout({ children }: IProductCategory) {
  return (
    <Layout>
      {children}
      <Products />
      <AudioGearSection />
    </Layout>
  );
}
