import React from "react";
import * as styles from "./styles.module.scss";

/**
 */
export const Default = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

/**
 */
export const Header = () => {
  return <div>header</div>;
};

/**
 */
export const Body = ({ children }) => {
  return <div className={styles.Body}>{children}</div>;
};

/**
 */
export const Footer = () => {
  return <div>footer</div>;
};
