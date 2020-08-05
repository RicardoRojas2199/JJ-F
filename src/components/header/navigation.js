/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const links = [
  {
    name: 'Nosotros',
    path: '/nosotros',
  },
  {
    name: 'Servicios',
    path: '/servicios',
  },
  {
    name: 'Nuestros Trabajos',
    path: '/obras',
  },
  {
    name: 'Contáctenos',
    path: '/',
  },
];

const Navigation = ({ handleMenu }) => (
  <nav sx={{ variant: 'layout.nav' }}>
    {links.map((link) => (
      <Link
        sx={{ fontFamily: 'heading' }}
        to={link.path}
        key={link.name}
        onClick={handleMenu}
      >
        {link.name}
      </Link>
    ))}
  </nav>
);

export default Navigation;
