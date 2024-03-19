class NewsController {
  // GET /news
  index(req, res) {
    res.render("news");
  }

  // GET /news/:slug
  show(req, res) {
    res.send("DETAIL");
  }

  // GET /news/abc
  test(req, res) {
    res.send("abc");
  }
}

module.exports = new NewsController();
