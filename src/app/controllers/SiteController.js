const Course = require("../models/Course");

class SiteController {
  // GET /news
  async home(req, res) {
    
    try {
        const courses = await Course.find({});
        res.json(courses);
    } catch (error) {
        res.status(400).json({ error: 'Error!!' });
    }
    

    // res.render('home');
  }

  // GET /news/:slug
  search(req, res) {
    res.render("search");
  }

  // GET /news/abc
  test(req, res) {
    res.send("abc");
  }
}

module.exports = new SiteController();
