const vader = require('vader-sentiment');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/v1/sentiment', (req, res) => {
    const sentence = req.body;

    console.log(sentence)
    sentence.push(sentence)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

