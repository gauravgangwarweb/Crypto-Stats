import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav data-testid="Navbar-1" className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'invisible' : 'visible')}
      >
        <i className="fa-solid fa-left-long" />
      </NavLink>
      <p>Coin ranking</p>
      <div className="nav-icons">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </nav>
  </>
);

export default Navbar;
