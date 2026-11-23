import { Tag, Tile } from "@carbon/react";

export type PlannedAppTag = "Game" | "App" | "Finance" | "Tool";

type TagColor = "magenta" | "purple" | "teal" | "blue";

const tagColors: Record<PlannedAppTag, TagColor> = {
  Game: "magenta",
  App: "blue",
  Finance: "purple",
  Tool: "teal",
};

export interface PlannedAppTileProps {
  title: string;
  description: string;
  tags: PlannedAppTag[];
}

export function PlannedAppTile({ title, description, tags }: PlannedAppTileProps) {
  return (
    <Tile className="carbon-tile-link carbon-tile-link--static">
      <div className="carbon-tile-meta">
        <div className="carbon-tile-meta__tags">
          {tags.map((tag) => (
            <Tag key={tag} type={tagColors[tag]} size="sm">
              {tag}
            </Tag>
          ))}
        </div>
        <Tag type="warm-gray" size="sm">
          Planned
        </Tag>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Tile>
  );
}
