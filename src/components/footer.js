/**@jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => (
  <footer
    sx={{
      textAlign: 'center',
      color: 'muted',
      pb: 1,
    }}
  >
    Copyright ©{new Date().getFullYear()} JJ&amp;F Contratistas Generales
  </footer>
);

export default Footer;
