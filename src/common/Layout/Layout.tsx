import * as React from "react";
import { Box, BoxProps } from "@mui/material";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayout extends BoxProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <Box
    // sx={{
    //   "& > *:not(:first-child)": {
    //     paddingInline: "24px",
    //   },

    //   "& > *:not(:nth-child(2))": {
    //     paddingInline: "24px",
    //   },
    // }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
