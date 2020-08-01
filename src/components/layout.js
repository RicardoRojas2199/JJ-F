/**@jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { Global } from "@emotion/core";
import Header from "./header/header";
import Drawer from "./header/drawer";
import Slider from "./slider";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen((current) => !current);
  };
  return (
    <div sx={{ variant: "layout" }}>
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
        }}
      />
      <Header handleMenu={handleMenu} />
      <Drawer menuOpen={menuOpen} />
      <Slider />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
