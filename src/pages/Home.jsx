import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
import { apps, studio } from "../content/site";
import { usePageTitle } from "../usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Google Play developer site</p>
          <h1>{studio.tagline}</h1>
          <p className="lede">{studio.summary}</p>
          <div className="hero-actions">
            <Link className="button" to="/apps">
              See the apps
            </Link>
            <Link className="button button-ghost" to="/privacy">
              Privacy policy
            </Link>
          </div>
        </div>
        <aside className="hero-panel">
          <p className="panel-label">Studio</p>
          <p className="panel-name">{studio.name}</p>
          <dl className="facts">
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
              <dd>
                <a href={`mailto:${studio.email}`}>{studio.email}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <div className="section-head">
        <h2>The catalog</h2>
        <Link to="/apps">All apps</Link>
      </div>
      <div className="grid">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </>
  );
}
