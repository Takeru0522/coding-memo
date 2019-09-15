const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const db = 'mongodb://localhost/coding-memo';
const authController = require('./controllers/auth');
const userController = require('./controllers/user');


app.use(session({
    secret: 'top secret',
    resave: false,
    saveUninitialized: false,
}))

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride('_method'));
app.use(bodyParser.json());


app.use('/api/auth', authController);
app.use('/api/users', userController);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running...')
})
