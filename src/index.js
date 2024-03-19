const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const exp = require('constants');

const route = require('./routes');

const app = express();
const port = 8080;

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Use img
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan("combined"));

// Template Engine
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: '.hbs',
});
app.engine(
    'hbs',

    hbs.engine,
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
