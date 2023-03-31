import * as React from "react";
import { Layout, AudioGearSection, Categories } from "../index";

interface IProductCategory {
  children?: React.ReactNode;
}

export default function ProductCategoryLayout({ children }: IProductCategory) {
  return (
    <Layout>
      {children}
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
