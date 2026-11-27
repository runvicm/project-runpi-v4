import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/events/:slug", "routes/details.tsx"),

] satisfies RouteConfig;
