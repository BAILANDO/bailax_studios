import AppCard from "../components/AppCard";
import { apps } from "../content/site";
import { usePageTitle } from "../usePageTitle";

const order = ["Arcade", "Tools", "Finance"];

export default function Apps() {
  usePageTitle("Apps");
  const groups = order
    .map((category) => ({
      category,
      items: apps.filter((app) => app.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <p className="kicker">Catalog</p>
      <h1>Apps</h1>
      <p className="lede">
        Five Android titles from the BailaX Studio listings. Fan-made apps are marked, and each of those pages carries its own disclaimer.
      </p>
      {groups.map((group) => (
        <section className="group" key={group.category}>
          <h2>{group.category}</h2>
          <div className="grid">
            {group.items.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
