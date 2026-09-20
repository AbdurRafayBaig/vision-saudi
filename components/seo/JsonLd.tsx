// Renders schema.org structured data. `<` is escaped so no string inside the data
// (an article title, an address) can close the <script> tag and inject markup.
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
