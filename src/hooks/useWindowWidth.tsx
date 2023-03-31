import React from "react";

export default function useWindowWidth() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  return screenWidth;
}
