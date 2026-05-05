type JsonLdValue = string | number | boolean | null | JsonLdObject | readonly JsonLdValue[];

type JsonLdObject = {
  readonly [key: string]: JsonLdValue;
};

export const serializeJsonLd = (data: JsonLdObject): string =>
  // Escaping `<` prevents a future dynamic JSON-LD value from closing the script tag.
  // We keep this as text children instead of dangerouslySetInnerHTML because the project forbids it.
  JSON.stringify(data).replace(/</g, "\\u003c");

export const StructuredData = ({ data }: { readonly data: JsonLdObject }) => (
  <script type="application/ld+json" suppressHydrationWarning>
    {serializeJsonLd(data)}
  </script>
);
