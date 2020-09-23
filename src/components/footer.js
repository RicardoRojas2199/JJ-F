/**@jsx jsx */
import { jsx } from 'theme-ui'

const Footer = () => (
  <footer
    sx={{
      textAlign: 'center',
      color: 'background',
      py: 3,
      bg: 'primary',
      fontFamily: 'heading'
    }}
  >
    Copyright ©{new Date().getFullYear()} J J &amp; F Contratistas Generales
  </footer>
)

export default Footer
