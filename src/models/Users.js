const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
        minlength: [3, 'Minimum email length is 3 characters'],
        maxlength: [50, 'Maximum email length is 50 characters'],
    },
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: [3, 'Minimum name length is 3 characters'],
        maxlength: [50, 'Maximum name length is 50 characters'],
    },
    pass: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.pass = await bcrypt.hash(this.pass, salt);
    next();
});

userSchema.statics.login = async function (email, pass) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(pass, user.pass);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User;
