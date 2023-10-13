const galleryRouter = require('./gallary.route');
function route(app) {

    app.use('/gallery', galleryRouter);

    app.get('/about', (req, res) => {
        res.render('about');
    });

    app.get('/blog', (req, res) => {
        res.render('blog');
    });

    app.get('/contact-us', (req, res) => {
        res.render('contact-us');
    });

    app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = route;
