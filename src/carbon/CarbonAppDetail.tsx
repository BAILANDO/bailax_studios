import { Link, useParams } from "react-router-dom";
import { Button, InlineNotification } from "@carbon/react";
import { getApp } from "../content/site";
import { usePageTitle } from "../usePageTitle";
import { AppMeta } from "./AppMeta";

export default function CarbonAppDetail() {
  const { slug } = useParams();
  const app = getApp(slug);
  usePageTitle(app ? app.name : "App");

  if (!app) {
    return (
      <>
        <h1>App not found</h1>
        <Button as={Link} to="/apps" kind="tertiary">
          Back to apps
        </Button>
      </>
    );
  }

  return (
    <article className="carbon-legal">
      <AppMeta app={app} className="carbon-tile-meta--tight" />
      <h1>{app.name}</h1>
      <p>{app.summary}</p>
      <p>
        Package <code>{app.packageId}</code>
      </p>
      {app.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="carbon-detail-actions">
        <Button href={app.playUrl} target="_blank" rel="noreferrer">
          View on Google Play
        </Button>
        <Button kind="ghost" as={Link} to="/apps">
          All apps
        </Button>
      </div>
      {app.disclaimer ? (
        <div className="carbon-banner">
          <InlineNotification
            kind="warning"
            title="Disclaimer"
            subtitle={app.disclaimer.join(" ")}
            lowContrast
            hideCloseButton
          />
        </div>
      ) : null}
      <h2>What this app handles</h2>
      <ul>
        {app.dataNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </article>
  );
}
