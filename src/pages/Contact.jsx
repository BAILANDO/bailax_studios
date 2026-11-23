import { Link } from "react-router-dom";
import { studio } from "../content/site";
import { usePageTitle } from "../usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <article className="legal">
      <p className="kicker">Support</p>
      <h1>Contact {studio.name}</h1>
      <p className="lede">
        Use this address for app support, privacy requests, and the support email in Google Play Console.
      </p>
      <p>
        <a className="contact-mail" href={`mailto:${studio.email}`}>
          {studio.email}
        </a>
      </p>
      <p>
        There is no form on this site. The message stays in your email app.
      </p>
      <p>
        Policies: <Link to="/privacy">privacy</Link>, <Link to="/terms">terms</Link>, and the{" "}
        <Link to="/disclaimer">disclaimer</Link>.
      </p>
    </article>
  );
}
