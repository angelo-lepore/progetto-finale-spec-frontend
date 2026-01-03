// Import NavLink e Link
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="bi bi-phone-fill fs-4"></i>
          <span className="fw-bold">PhoneCompare</span>
        </Link>

        {/* Bottone mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigazione */}
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-house-fill"></i> Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/smartphones"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-phone"></i> Smartphones
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/compare"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-arrow-left-right"></i> Confronta
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-info-circle-fill"></i> Chi siamo
              </NavLink>
            </li>
          </ul>

          {/* Link ai preferiti */}
          <div className="d-flex align-items-center ms-3">
            <Link
              to="/favorites" // pagina dei preferiti
              className="text-warning fs-4" // colore giallo ★
              style={{ textDecoration: "none" }}
              title="Preferiti"
            >
              ★
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
