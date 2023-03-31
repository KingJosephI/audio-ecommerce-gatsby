import * as React from "react";
import { Layout, AudioGearSection, Categories, Banner } from "../index";

interface IProductCategory {
  children?: React.ReactNode;
  title: string;
}

export default function ProductCategoryLayout({
  title,
  children,
}: IProductCategory) {
  return (
    <Layout>
      <Banner title={title} />
      {children}
      <Categories />
      <AudioGearSection />
    </Layout>
  );
}
