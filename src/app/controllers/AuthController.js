const User = require('../../models/Users');
const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60;

class AuthController {
    singup_get(req, res) {
        res.render('signup');
    }

    login_get(req, res) {
        res.render('login')
    }

    logout_get(req, res) {
        res.cookie('jwt', '', {maxAge: 1});
        res.redirect('/');
    }

    async singup_post(req, res) {
        try {
            const {name, email, pass} = req.body;
            const user = await User.create({name, email, pass});
            const token = createToken(user._id);
            res.cookie('jwt', token, {maxAge: maxAge * 1000, httpOnly: true, secure: false});
            res.status(201).json({user: user._id});
        } catch (err) {
            const errors = handleErrors(err);
            return res.status(400).json({errors});
        }
    }

    async login_post(req, res) {
        const {email, pass} = req.body;
        try {
            const user = await User.login(email, pass);
            const token = createToken(user._id);
            res.cookie('jwt', token, {maxAge: maxAge * 1000, httpOnly: true, secure: false});
            res.status(200).json({user: user._id});
        } catch (err) {
            const errors = handleErrors(err);
            return res.status(400).json({errors});
        }
    }
}

const createToken = (id) => {
    return jwt.sign({id}, 'thanh dep trai so 1', {
        expiresIn: maxAge
    });
}

function handleErrors(err) {
    let errors = {name: '', email: '', pass: ''};

    if(err.message.includes('incorrect email')) {
        errors.email = 'That email is not registered';
        return errors;
    }

    if(err.message.includes('incorrect password')) {
        errors.pass = 'That password is incorrect';
        return errors;
    }

    if (err.code === 11000) {
        errors.email = 'Email already registered';
        return errors;
    }
    if (err.message.includes('`name` is required')) {
        errors.name = 'Name is required';
        return errors;
    }
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports = new AuthController();
