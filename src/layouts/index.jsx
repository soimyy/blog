import React from "react";
import * as DefaultPageLayout from "./DefaultPageLayout/Default";

/**
 */
const Layout = ({ children, pageContext }) => {
  //   if (pageContext.layout === "special") {
  //     return <>{children}</>;
  //   }
  console.log("Layout");
  return <DefaultPageLayout.Default>{children}</DefaultPageLayout.Default>;
};

export default Layout;
