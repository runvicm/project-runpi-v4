

import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import Project from "~/components/Project";
import Devlog from "~/components/Devlog";
import Services from "~/components/Services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Hero />
      <Project />
      <Services />
      <Devlog />
    </>
  );
}
