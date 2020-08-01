/**@jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "./navigation";

const Drawer = ({ menuOpen }) => (
  <div
    sx={{
      variant: "layout.drawer",
      transform: menuOpen ? "translateX(0)" : "translate(-100%)",
      transition: "400ms",
    }}
  >
    <Navigation />
  </div>
);

export default Drawer;
