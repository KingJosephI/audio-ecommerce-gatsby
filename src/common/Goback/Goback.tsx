import React from "react";
import { Button } from "@mui/material";
// import { Link } from "gatsby";
import * as styles from "./Goback.module.scss";
import { navigate } from "gatsby";

export default function Goback() {
  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <Button variant="text" className={styles.goback} onClick={goToPreviousPage}>
      Go Back
    </Button>
  );
}
