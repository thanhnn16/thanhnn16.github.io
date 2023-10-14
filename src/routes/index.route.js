const galleryRouter = require('./gallary.route');
const authRouter = require('./auth.route');
const detailRouter = require('./detail.route');
const {json} = require("express");
const Hotel = require('../models/Hotel');
const {requireAuth, checkUser} = require('../middleware/authMiddleware');

function route(app) {

    app.get('*', checkUser);

    app.use('/gallery', galleryRouter);
    app.use('/hotel-detail', detailRouter);
    app.use('/auth', authRouter)

    app.get('/about', (req, res) => {
        res.render('about');
    });

    app.get('/blog', (req, res) => {
        res.render('blog');
    });

    app.get('/contact-us', (req, res) => {
        res.render('contact-us');
    });

    app.get('/set-cookies', (req, res) => {
        res.cookie('newUser', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: false});
        res.send('You got the cookies!')
    });

    app.get('/get-cookies', (req, res) => {
        const cookies = req.cookies;
        console.log(cookies);
        res.json(cookies);
    });

    app.get('/checkout', requireAuth, (req, res) => {
        res.render('checkout');
    });

    app.get('/', async (req, res) => {
        const hotelsFromDB = await Hotel.find();
        const hotels = hotelsFromDB.map(hotel => hotel.toObject());
        res.render('home', {hotels});
    });
}

module.exports = route;
