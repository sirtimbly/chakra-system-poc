import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { theme } from "./theme";

export const Provider: React.FC<React.PropsWithChildren> = (props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};
