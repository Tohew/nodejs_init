const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // GET /news
    async home(req, res, next) {
        try {
            let courses = await Course.find({});

            res.render('home', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }

        // res.render('home');
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
