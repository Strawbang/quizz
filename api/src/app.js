const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
    ]
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./config/database');
require('./components/questions/questionRoute')(app);
require('./components/quizz/quizzRoute')(app);

app.post('/', (req, res) => {
    res.send('Api Quizz')
});

module.exports = app;