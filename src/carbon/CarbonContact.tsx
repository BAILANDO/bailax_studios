import { Link } from "react-router-dom";
import { Button, Tag } from "@carbon/react";
import { studio } from "../content/site";
import { usePageTitle } from "../usePageTitle";

export default function CarbonContact() {
  usePageTitle("Contact");

  return (
    <article className="carbon-legal">
      <Tag type="blue" size="sm">
        Support
      </Tag>
      <h1>Contact {studio.name}</h1>
      <p>Use this address for app support, privacy requests, and Play Console.</p>
      <p style={{ fontSize: "1.5rem", fontWeight: 600 }}>
        <a href={`mailto:${studio.email}`}>{studio.email}</a>
      </p>
      <Button href={`mailto:${studio.email}`}>Email support</Button>
      <p style={{ marginTop: "1.5rem" }}>
        Policies: <Link to="/privacy">privacy</Link>, <Link to="/terms">terms</Link>,{" "}
        <Link to="/disclaimer">disclaimer</Link>.
      </p>
    </article>
  );
}
