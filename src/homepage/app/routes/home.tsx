import Hero from "~/components/Hero";
import Project from "~/components/Project";
import Devlog from "~/components/Devlog";
import { createMeta } from "~/utils/seo";
import { OG_DESCRIPTION, SITE_CONFIG } from "~/constants";
import { env } from "cloudflare:workers";

export function meta() {
  return createMeta({
    title: `${SITE_CONFIG.title} - Homepage`,
    description: `${OG_DESCRIPTION}`,
    type: "website"
  });
}

/**
 * Fecth development log
 * 
 * @returns devlogs
 */
export function loader() {
  const API_URL = env.API_URL;
  const API_KEY = env.API_KEY;

  const devlogs = fetch(`${API_URL}/api/homepage/devlog`)
    .then((res) => res.json());
  
  return { devlogs };
}


export default function Home() {

  return (
    <>
      <Hero />
      <Project />
      <Devlog />
    </>
  );
}
