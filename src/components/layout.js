/**@jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { Global } from "@emotion/core";
import PageTransition from "gatsby-plugin-page-transitions";

import Header from "./header/header";
import Drawer from "./header/drawer";
import Slider from "./slider";
import Footer from "./footer";

const Layout = ({ children, location }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen((current) => !current);
  };
  return (
    <PageTransition>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          "html,body": {
            margin: 0,
          },
          ".visually-hidden": {
            position: "absolute !important",
            height: "1px",
            width: "1px",
            overflow: "hidden",
            clip: "rect(1px, 1px, 1px, 1px)",
            whiteSpace: "nowrap",
          },
          "#gatsby-focus-wrapper": {
            minHeight: "100vh",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      />
      <Header handleMenu={handleMenu} />
      <Drawer menuOpen={menuOpen} handleMenu={() => setMenuOpen(false)} />
      {location && location.pathname === "/" && <Slider />}
      <main
        sx={{
          width: "90vw",
          mx: "auto",
          maxWidth: "960px",
          variant: "styles",
          pb: 6,
          pt: location && location.pathname === "/" ? 0 : 64,
        }}
      >
        {children}
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Layout;
