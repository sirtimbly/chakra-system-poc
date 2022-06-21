import { NextPage } from "next";
import * as React from "react";
import "ui/assets/typography.css";
const MyApp: React.FC<{ Component: NextPage; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};
export default MyApp;
