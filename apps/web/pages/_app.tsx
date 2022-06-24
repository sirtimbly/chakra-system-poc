import { NextPage } from "next";
import * as React from "react";
import { Provider } from "ui";
import "ui/assets/typography.css";

const MyApp: React.FC<{ Component: NextPage; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return (
    <Provider>
      <header>
        {/* <Button onClick={toggleHandler}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button> */}
      </header>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
