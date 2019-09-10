const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = 'mongodb://localhost/coding-memo';

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running...')
})
