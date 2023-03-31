import * as React from "react";
import { Link } from "gatsby";
import { Box, Button, BoxProps, Typography, Input, Stack } from "@mui/material";
import * as styles from "./ProductCardPriced.module.scss";

interface IProductCard extends BoxProps {
  image: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  title: string;
  description: string;
  price: number;
  newProductLabel?: string;
  goToUrl: string;
  sx?: object;
}

export default function ProductCard({
  image: { desktop, tablet, mobile },
  title = "",
  description = "",
  price,
  newProductLabel = "",
  goToUrl = "",
  sx,
}: IProductCard) {
  const [value, setValue] = React.useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box className={styles.card} sx={sx}>
      <Box className={styles.card__imageContainer}>
        <picture>
          <source media="(min-width:1024px)" srcSet={desktop} />
          <source media="(min-width:768px)" srcSet={tablet} />
          <img
            src={mobile}
            className={styles.card__imageContainer_image}
            alt=""
          />
        </picture>
      </Box>
      <Box className={styles.card__details}>
        <Typography className={styles.card__newProductLabel} component="span">
          {newProductLabel}
        </Typography>
        <Typography className={styles.card__title} component="h2">
          {title}
        </Typography>
        <Typography className={styles.card__description} component="p">
          {description}
        </Typography>
        <Typography>$ {price}</Typography>

        <Stack direction={"row"} spacing={2}>
          <Box display="flex" bgcolor="whitesmoke">
            <Button sx={{ color: "grey" }} onClick={() => setValue(value - 1)}>
              -
            </Button>
            <input
              value={value}
              onChange={handleChange}
              style={{
                width: "30px",
                outline: "none",
                border: "none",
                textAlign: "center",
                fontWeight: "bold",
                background: "whitesmoke",
              }}
            />
            <Button sx={{ color: "grey" }} onClick={() => setValue(value + 1)}>
              +
            </Button>
          </Box>
          <Link to={goToUrl}>
            <Button className={styles.card__button} variant="contained">
              ADD TO CART
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
