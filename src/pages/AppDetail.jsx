import { Link, useParams } from "react-router-dom";
import { getApp } from "../content/site";
import { usePageTitle } from "../usePageTitle";

export default function AppDetail() {
  const { slug } = useParams();
  const app = getApp(slug);
  usePageTitle(app ? app.name : "App");

  if (!app) {
    return (
      <div className="empty prose">
        <p className="kicker">Missing app</p>
        <h1>That app is not in the catalog.</h1>
        <p>
          <Link to="/apps">Back to the apps</Link>
        </p>
      </div>
    );
  }

  return (
    <article className="prose">
      <div className="detail-top">
        <Link className="back" to="/apps">
          All apps
        </Link>
        <span className="cat" data-cat={app.category}>
          {app.category}
        </span>
        <span
          className="pill"
          title="This app is not listed on the store anymore"
        >
          Deprecated
        </span>
        {app.unofficial ? <span className="pill">Unofficial</span> : null}
      </div>
      <h1>{app.name}</h1>
      <p className="lede">{app.summary}</p>
      <p className="package">
        Package <code>{app.packageId}</code>
      </p>
      {app.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {app.playUrl ? (
        <p>
          <a className="button" href={app.playUrl} target="_blank" rel="noreferrer">
            View on Google Play
          </a>
        </p>
      ) : null}
      {app.disclaimer ? (
        <aside className="callout">
          <h2>Disclaimer</h2>
          {app.disclaimer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </aside>
      ) : null}
      <section className="notes">
        <h2>What this app handles</h2>
        <ul>
          {app.dataNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
