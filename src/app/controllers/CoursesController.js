const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseObject,
} = require("../../util/mongoose");

class CourseController {
  //GET /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  // GET /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // POST /courses/store
  store(req, res, next) {
    // res.json(req.body);

    const formData = req.body;

    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;

    const course = new Course(formData);
    course.save()
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log("Error at CoursesController: " + error);
      });
  }
}

module.exports = new CourseController();
