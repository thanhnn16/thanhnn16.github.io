const jwt = require('jsonwebtoken');
const User = require("../models/Users");


const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'thanh dep trai so 1', (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/');
            } else {
                next();
            }
        });
    } else {
        console.log('No token')
        res.redirect('/');
    }
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'thanh dep trai so 1', async (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                res.locals.userDisplayName = user.name;
                next();
            }
        });
    } else {
        console.log('No token')
        next();
    }
}

module.exports = { requireAuth, checkUser };
