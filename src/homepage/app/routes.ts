import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [

  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    // route("services", "routes/Services.tsx"),
    // route("tech-stacks", "routes/TechStacks.tsx"),
    // route("about", "routes/About.tsx"),
  ]),



] satisfies RouteConfig;
