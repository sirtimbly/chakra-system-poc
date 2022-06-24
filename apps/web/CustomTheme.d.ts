import { BaseThemeTypings } from "@chakra-ui/styled-system";
import { NewTheme } from "ui";

declare module "@chakra-ui/react" {
  export interface ThemeTypings extends BaseThemeTypings {
    components: {
      Button: {
        // Example custom component sizes and variants
        variants: keyof NewTheme["components"]["Button"]["variants"];
      };
      // ...
    };
  }
}
