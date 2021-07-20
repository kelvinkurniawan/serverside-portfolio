const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("about");
routes.add("skills", "/about/skills");
routes.add("single", "/blog/:slug");
