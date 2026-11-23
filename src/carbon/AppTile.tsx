import type { ComponentProps, ComponentType } from "react";
import { Link } from "react-router-dom";
import { ClickableTile } from "@carbon/react";
import type { App } from "../content/site";
import { AppMeta } from "./AppMeta";

// Carbon's typings omit the polymorphic `as` prop that ClickableTile supports
// at runtime, so widen the props to accept it (and react-router's `to`).
const RouterClickableTile = ClickableTile as ComponentType<
  ComponentProps<typeof ClickableTile> & { as?: typeof Link; to?: string }
>;

export function AppTile({ app }: { app: App }) {
  const path = `/apps/${app.slug}`;

  return (
    // `href` is kept so the tile stays a real link (no manual tabIndex/key
    // handling); react-router's Link uses `to` for client-side navigation.
    <RouterClickableTile
      as={Link}
      to={path}
      href={path}
      className="carbon-tile-link"
    >
      <AppMeta app={app} />
      <h3>{app.name}</h3>
      <p>{app.summary}</p>
    </RouterClickableTile>
  );
}
