import type { MetaDescriptor } from "react-router";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile" | (string & {});
  url?: string;
  publishedAt?: string;
}

export function createMeta({
  title,
  description,
  image = "https://devlog.projectrunpi.com/assets/og_image.png",
  type = "website",
  url,
  publishedAt,
}: SeoProps): MetaDescriptor[] {

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: type },
    ...(url ? [{ property: "og:url", content: url }] as MetaDescriptor[] : []),
    ...(type === "article" && publishedAt
      ? [{ property: "article:published_time", content: publishedAt }] as MetaDescriptor[]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

}
