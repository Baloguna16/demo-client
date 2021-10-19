import { useState } from 'react';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a class="navbar-brand" href="/">Demo App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed && 'collapse'} navbar-collapse`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={`nav-item ${!isNavCollapsed && 'mx-auto'}`}>
              <a className="nav-link active" aria-current="page" href="/main">Main</a>
            </li>
            <li className={`nav-item ${!isNavCollapsed && 'mx-auto'}`}>
              <a className="nav-link" href="/main/protected">Protected</a>
            </li>
            <li className={`nav-item ${!isNavCollapsed && 'mx-auto'}`}>
              <a className="nav-link" href="/main/form">Form</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
