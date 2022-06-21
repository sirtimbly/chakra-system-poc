import { colors } from "./styles";
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import typography from "./foundations/typography";
const overrides = {
  colors,
  ...typography,
  components: {
    Button,
  },
};
export type Theme = typeof overrides;
export default extendTheme(overrides);
