import { Link } from "react-router-dom";
import logo from "../../assets/images/acuttis-logo.png";

function Navbar() {
  //estou utilizando uma navbar por motivos esteticos e para explorar um pouco do materialize
  //
  return (
    <div className="navbar-fixed app-navbar">
      <nav className="blue lighten-3">
        <div className="container">
          <div className="nav-wrapper ">
            <Link
              to={`/`}
              style={{ textDecoration: "none" }}
              className="brand-logo black-text"
            >
              <img src={logo} />
            </Link>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down black-text"
            >
              <li>
                <Link to={`/history/`} style={{ textDecoration: "none" }}>
                  Histórico
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
