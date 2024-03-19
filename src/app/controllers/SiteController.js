class SiteController {
    // GET /news
    home(req, res) {
        res.render('home');
    }

    // GET /news/:slug
    search(req, res) {
        res.render('search');
    }

    // GET /news/abc
    test(req, res) {
        res.send('abc');
    }
}

module.exports = new SiteController();
