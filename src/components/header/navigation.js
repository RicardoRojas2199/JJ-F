/**@jsx jsx */
import { jsx } from "theme-ui";

const links = [
  {
    name: "Nosotros",
    path: "/",
  },
  {
    name: "Servicios",
    path: "/",
  },
  {
    name: "Nuestros Trabajos",
    path: "/",
  },
  {
    name: "Contáctenos",
    path: "/",
  },
];

const Navigation = () => (
  <nav>
    {links.map((link) => (
      <a sx={{ fontFamily: "heading" }} href={link.path}>
        {link.name}
      </a>
    ))}
  </nav>
);

export default Navigation;
