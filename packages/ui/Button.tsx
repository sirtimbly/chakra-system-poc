import * as React from "react";
import {
  Button as CButton,
  ButtonGroup as CButtonGroup,
} from "@chakra-ui/react";
export const Button: React.FC<{}> = (props) => {
  return (
    <CButton colorScheme={"blue"} size="lg">
      {props.children}
    </CButton>
  );
};
