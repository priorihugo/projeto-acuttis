import logo from "../../assets/images/acuttis-logo.png";

function Navbar() {
  return (
    <div className="navbar-fixed app-navbar">
      <nav className="blue lighten-3">
        <div className="container">
          <div className="nav-wrapper ">
            <a href="#" className="brand-logo black-text">
              <img src={logo} />
            </a>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down black-text"
            >
              <li>
                <a className="black-text" href="#">
                  Help
                </a>
              </li>
              <li>
                <a className="black-text" href="badges.html">
                  Histórico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
