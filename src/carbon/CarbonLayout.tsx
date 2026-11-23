import { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  Content,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  Theme,
} from "@carbon/react";
import { studio } from "../content/site";

const nav = [
  ["Home", "/"],
  ["Apps", "/apps"],
  ["Privacy", "/privacy"],
  ["Contact", "/contact"],
];

export default function CarbonLayout() {
  useEffect(() => {
    document.documentElement.dataset.skin = "carbon";
    document.documentElement.dataset.carbonTheme = "g100";
  }, []);

  return (
    <Theme theme="g100" className="carbon-shell">
      <Header aria-label={studio.name}>
        <HeaderName as={Link} to="/" prefix="BailaX">
          Studios
        </HeaderName>
        <HeaderNavigation aria-label="Primary">
          {nav.map(([label, to]) => (
            <HeaderMenuItem key={to} as={NavLink} to={to} end={to === "/"}>
              {label}
            </HeaderMenuItem>
          ))}
        </HeaderNavigation>
      </Header>
      <Content id="main-content" className="carbon-main">
        <Outlet />
      </Content>
      <footer className="carbon-footer">
        <div className="carbon-footer__inner">
          <strong>{studio.name}</strong>
          <p style={{ margin: 0, color: "var(--cds-text-secondary)" }}>
            Published on Google Play as {studio.storeName}. Support:{" "}
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </p>
          <nav className="carbon-footer__links" aria-label="Policies">
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
            <NavLink to="/disclaimer">Disclaimer</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </footer>
    </Theme>
  );
}
