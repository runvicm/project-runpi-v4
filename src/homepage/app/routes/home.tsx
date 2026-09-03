import Hero from "~/components/Hero";
import Project from "~/components/Project";
import Devlog from "~/components/Devlog";
import Services from "~/components/Services";
import { createMeta } from "~/utils/seo";
import { OG_DESCRIPTION, SITE_CONFIG } from "~/constants";

export function meta() {
  return createMeta({
    title: `${SITE_CONFIG.title} - Homepage`,
    description: `${OG_DESCRIPTION}`,
    type: "website"
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <Services />
      <Devlog />
    </>
  );
}
