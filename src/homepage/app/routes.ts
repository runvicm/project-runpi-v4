import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

  layout("routes/layout.tsx", [
    index("routes/home.tsx"), 
    route("services", "routes/services.tsx"),
    route("tech-stacks", "routes/tech-stacks.tsx"),
    route("about", "routes/about.tsx"),
  ]),



] satisfies RouteConfig;
