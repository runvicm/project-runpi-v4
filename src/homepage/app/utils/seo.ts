import type { MetaDescriptor } from "react-router";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile" | (string & {})
}

export function createMeta({
  title,
  description,
  image = "https://example.com",
  type = "website"
}: SeoProps): MetaDescriptor[] {

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: type },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

}
