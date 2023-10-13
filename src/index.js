const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// Set up handlebars
app.use(express.static(path.join(__dirname, 'public')));
const route = require('./routes/index.route');

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
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
