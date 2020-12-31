import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const UseMobile = () => {
  const [state, setState] = React.useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile;
};
export default UseMobile;
