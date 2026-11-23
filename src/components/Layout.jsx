import { NavLink, Outlet } from "react-router-dom";
import { studio } from "../content/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Apps", "/apps"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Contact", "/contact"],
];

export default function Layout() {
  return (
    <div className="shell">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" className="brand" end>
          <span className="mark" aria-hidden="true" />
          BailaX <em>Studios</em>
        </NavLink>
        <div className="header-tools">
          <nav className="nav" aria-label="Primary">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/carbon">Carbon</NavLink>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main id="content" className="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">{studio.name}</p>
            <p className="footer-note">
              Published on Google Play as {studio.storeName}. Support:{" "}
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </p>
          </div>
          <nav className="footer-links" aria-label="Policies">
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
            <NavLink to="/disclaimer">Disclaimer</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </footer>
    </div>
  );
}
