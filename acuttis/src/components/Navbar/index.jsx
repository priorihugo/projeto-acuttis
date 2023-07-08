function Navbar() {
  return (
    <div className="navbar-fixed app-navbar">
      <nav className="amber accent-3">
        <div className="container">
          <div className="nav-wrapper ">
            <a href="#" className="brand-logo black-text">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down black-text">
              <li>
                <a  className="black-text" href="#">Help</a>
              </li>
              <li>
                <a className="black-text" href="badges.html">Histórico</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
