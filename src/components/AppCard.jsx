import { Link } from "react-router-dom";

export default function AppCard({ app }) {
  return (
    <Link className="card" data-cat={app.category} to={`/apps/${app.slug}`}>
      <div className="card-top">
        <span className="cat">{app.category}</span>
        <span
          className="pill"
          title="This app is not listed on the store anymore"
        >
          Deprecated
        </span>
        {app.unofficial ? <span className="pill">Unofficial</span> : null}
      </div>
      <h3>{app.name}</h3>
      <p>{app.summary}</p>
    </Link>
  );
}
