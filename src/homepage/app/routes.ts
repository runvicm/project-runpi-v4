import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

  layout("routes/layout.tsx", [
    index("routes/home.tsx"), 
    route("services", "routes/services.tsx"),
    route("tech-stack", "routes/tech-stack.tsx"),
    route("about", "routes/about.tsx"),
  ]),



] satisfies RouteConfig;
