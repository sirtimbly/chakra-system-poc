import { css } from "@chakra-ui/react";
import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";

const variantOutline: SystemStyleFunction = (props) => {
  return {
    border: "1px solid",
    backgroundColor: "blueAlpha.50",
    borderColor: mode(`blueAlpha.500`, `whiteAlpha.500`)(props),
    color: mode(`blue.500`, `blue.200`)(props),
    "&:hover": {
      backgroundColor: "blueAlpha.200",
      borderColor: mode(`blueAlpha.700`, `whiteAlpha.700`)(props),
      color: mode(`blue.700`, `blue.200`)(props),
    },
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px",
    },
  };
};
const variantPrimary: SystemStyleFunction = (props) => {
  return {
    backgroundColor: "blue.500",
    color: "white",
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px",
    },
    "&:hover": {
      backgroundColor: "blue.700",
    },
  };
};
const variantLink: SystemStyleFunction = (props) => {
  return {
    backgroundColor: "transparent",
    color: mode(`blue.500`, `blue.300`)(props),
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px",
    },
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "blueAlpha.100",
    },
  };
};
const Button = {
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "normal",
    borderRadius: "base",
  },
  defaultProps: {
    variant: "outline",
    size: "md",
    colorScheme: "blue",
  },
  sizes: {
    lg: { h: 8, px: 3, fontSize: "md" },
    md: { h: 8, px: 3, fontSize: "sm" },
    sm: { h: 7, px: 2, fontSize: "xs" },
  },
  variants: {
    outline: variantOutline,
    primary: variantPrimary,
    link: variantLink,
  },
};
export default Button;
