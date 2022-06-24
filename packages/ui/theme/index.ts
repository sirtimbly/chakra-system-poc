import { colors } from "./colors";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Theme from "@chakra-ui/theme";
import Button from "./components/button";
import typography from "./foundations/typography";
import radii from "./foundations/radius";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const baseTheme = Theme;
// @ts-ignore Hack the base theme so it's not in the generated output
baseTheme.components.Button.variants = {};
baseTheme.components.Button.sizes = {};

const overrides = {
  colors,
  radii,
  ...typography,
  components: {
    Button,
  },
  config,
};
export type NewTheme = typeof overrides;
export const theme = extendTheme(overrides, baseTheme);
