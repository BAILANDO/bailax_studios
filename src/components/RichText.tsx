import { studio } from "../content/site";

export default function RichText({ text }: { text: string }) {
  const email = studio.email;
  if (!text.includes(email)) return <>{text}</>;
  const [before, after] = text.split(email);
  return (
    <>
      {before}
      <a href={`mailto:${email}`}>{email}</a>
      {after}
    </>
  );
}
