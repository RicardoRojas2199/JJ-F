/**@jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

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
      <Link sx={{ fontFamily: "heading" }} to={link.path} key={link.name}>
        {link.name}
      </Link>
    ))}
  </nav>
);

export default Navigation;
