import RichText from "../components/RichText";
import { usePageTitle } from "../usePageTitle";

export default function Legal({ doc }) {
  usePageTitle(doc.kicker);

  return (
    <article className="legal">
      <p className="kicker">{doc.kicker}</p>
      <h1>{doc.title}</h1>
      {doc.updated ? <p className="updated">Updated {doc.updated}</p> : null}
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
