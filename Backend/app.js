const dotenv =  require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); /// for getting all type of web site but we change this during production we replace with domain that we are using for actually.

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;