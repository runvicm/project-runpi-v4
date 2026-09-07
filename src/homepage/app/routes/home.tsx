import Hero from "~/components/Hero";
import Project from "~/components/Project";
import Devlog from "~/components/Devlog";
import { createMeta } from "~/utils/seo";
import { OG_DESCRIPTION, SITE_CONFIG } from "~/constants";
import { env } from "cloudflare:workers";
import type { ActionFunctionArgs } from "react-router";

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

  const devlogs = fetch(`${API_URL}/api/homepage/devlog`, {
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
  }})
  .then((res) => res.json()); // no await! use append

  return { devlogs };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const slug = formData.get("slug") as string;
  const API_URL = env.API_URL;
  const API_KEY = env.API_KEY;
 
  await fetch(`${API_URL}/api/devlog/view/${slug}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  return null;
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
