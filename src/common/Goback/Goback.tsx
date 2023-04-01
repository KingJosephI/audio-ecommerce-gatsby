import React from "react";
import { Button } from "@mui/material";
// import { Link } from "gatsby";
import * as styles from "./Goback.module.scss";
import { navigate } from "gatsby";

export default function Goback() {
  return (
    <Button
      variant="text"
      className={styles.goback}
      onClick={() => navigate(-1)}
    >
      Go Back
    </Button>
  );
}
