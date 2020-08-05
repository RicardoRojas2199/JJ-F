/**@jsx jsx */
import { jsx } from 'theme-ui';
import Navigation from './navigation';

const Drawer = ({ menuOpen, handleMenu }) => (
  <div
    sx={{
      variant: 'layout.drawer',
      transform: menuOpen ? 'translateX(0)' : 'translate(-100%)',
      transition: '400ms',
      zIndex: '300',
    }}
  >
    <Navigation handleMenu={handleMenu} />
  </div>
);

export default Drawer;
