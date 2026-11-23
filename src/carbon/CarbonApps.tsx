import { Tag } from "@carbon/react";
import { apps } from "../content/site";
import { usePageTitle } from "../usePageTitle";
import { AppTile } from "./AppTile";

const order = ["Arcade", "Tools", "Finance"];

const groups = order
  .map((category) => ({
    category,
    items: apps.filter((app) => app.category === category),
  }))
  .filter((group) => group.items.length > 0);

export default function CarbonApps() {
  usePageTitle("Apps");

  return (
    <>
      <Tag type="blue" size="sm">
        Catalog
      </Tag>
      <h1 className="carbon-page-title">Apps</h1>
      <p className="carbon-page-lead">
        {apps.length} Android titles from the BailaX Studio listings. Fan-made
        apps are marked unofficial.
      </p>
      {groups.map((group) => (
        <section key={group.category} className="carbon-section">
          <div className="carbon-section-head">
            <h2>{group.category}</h2>
          </div>
          <div className="carbon-grid">
            {group.items.map((app) => (
              <AppTile key={app.slug} app={app} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
