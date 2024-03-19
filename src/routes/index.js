const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
    
  app.use("/news", newsRouter);

  app.use("/", siteRouter);

  // Đối với query parameter => req.query
  // Đối với form data => req.body
}

module.exports = route;
