import { Link } from "react-router-dom";
import { Button, CopyButton, Tag, Tile } from "@carbon/react";
import { apps, studio } from "../content/site";
import { usePageTitle } from "../usePageTitle";
import { AppTile } from "./AppTile";

export default function CarbonHome() {
  usePageTitle("");

  return (
    <>
      <section className="carbon-hero">
        <div className="carbon-hero__copy">
          <Tag type="blue" size="sm">
            Google Play developer site
          </Tag>
          <h1>{studio.tagline}</h1>
          <p>{studio.summary}</p>
          <div className="carbon-hero__actions">
            <Button as={Link} to="/apps">
              Browse apps
            </Button>
            <Button kind="tertiary" as={Link} to="/privacy">
              Privacy policy
            </Button>
          </div>
        </div>
        <div className="carbon-panel">
          <Tile>
            <p className="carbon-panel__label">Studio</p>
            <p className="carbon-panel__name">{studio.name}</p>
            <dl className="carbon-facts">
              <div>
                <dt>Store name</dt>
                <dd>{studio.storeName}</dd>
              </div>
              <div>
                <dt>Apps</dt>
                <dd>{apps.length}</dd>
              </div>
              <div>
                <dt>Support</dt>
                <dd
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <a href={`mailto:${studio.email}`}>{studio.email}</a>
                  <CopyButton
                    onClick={() => navigator.clipboard.writeText(studio.email)}
                    iconDescription="Copy to clipboard"
                    autoAlign
                  />
                </dd>
              </div>
            </dl>
          </Tile>
        </div>
      </section>

      <div className="carbon-section-head">
        <h2>Catalog</h2>
        <Link to="/apps">All apps</Link>
      </div>
      <div className="carbon-grid">
        {apps.map((app) => (
          <AppTile key={app.slug} app={app} />
        ))}
      </div>
    </>
  );
}
