import { Tag } from "@carbon/react";
import RichText from "../components/RichText";
import type { LegalDoc } from "../content/site";
import { usePageTitle } from "../usePageTitle";

export default function CarbonLegal({ doc }: { doc: LegalDoc }) {
  usePageTitle(doc.kicker);

  return (
    <article className="carbon-legal">
      <Tag type="blue" size="sm">
        {doc.kicker}
      </Tag>
      <h1>{doc.title}</h1>
      {doc.updated ? <p>Updated {doc.updated}</p> : null}
      {doc.intro.map((paragraph) => (
        <p key={paragraph}>
          <RichText text={paragraph} />
        </p>
      ))}
      {doc.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
