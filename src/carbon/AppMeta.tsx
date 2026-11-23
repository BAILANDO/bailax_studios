import { Tag } from "@carbon/react";
import type { App } from "../content/site";
import { DeprecatedTag } from "./DeprecatedTag";
import { getTagColor } from "./getTagColor";

interface AppMetaProps {
  app: App;
  className?: string;
}

export function AppMeta({ app, className = "" }: AppMetaProps) {
  return (
    <div className={`carbon-tile-meta ${className}`.trim()}>
      <Tag type={getTagColor(app.category)} size="sm">
        {app.category}
      </Tag>
      <div className="carbon-tile-meta__status">
        <DeprecatedTag />
        {app.unofficial ? (
          <Tag type="warm-gray" size="sm">
            Unofficial
          </Tag>
        ) : null}
      </div>
    </div>
  );
}
