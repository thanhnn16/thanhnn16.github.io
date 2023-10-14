const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const route = require('./routes/index.route');
const cookieParser = require('cookie-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


const hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: './src/resources/views/layouts',
    partialsDir: './src/resources/views/partials',
    extname: '.hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views', 'layouts'));


route(app);
const uri = "mongodb+srv://miwth:OlC5Mbu9g4eGOI56@cluster0.mf0pb6o.mongodb.net/js_asm";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    }))
    .catch((err) => console.log(err));
const Hotel = require('./models/Hotel');
