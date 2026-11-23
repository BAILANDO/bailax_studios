import { Tag } from "@carbon/react";
import { usePageTitle } from "../usePageTitle";
import { PlannedAppTile, type PlannedAppTileProps } from "./PlannedAppTile";

const plannedApps: PlannedAppTileProps[] = [
  {
    title: "Tigz Stash Removal",
    description:
      "Simulation game where players manage a stash of items. Or how fast they can clear their stash",
    tags: ["Game"],
  },
];

export default function CarbonPlannedApps() {
  usePageTitle("Planned Apps");

  return (
    <>
      <Tag type="blue" size="sm">
        Roadmap
      </Tag>
      <h1 className="carbon-page-title">Planned Apps</h1>
      <p className="carbon-page-lead">Planned apps will be listed here.</p>

      <p>Stay tuned for updates on our planned applications.</p>
      <div style={{ marginBottom: 20 }}></div>
      <div className="carbon-grid">
        {plannedApps.map((app) => (
          <PlannedAppTile key={app.title} {...app} />
        ))}
      </div>
    </>
  );
}
