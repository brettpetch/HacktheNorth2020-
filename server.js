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
    // take in the sentence as the input
    const sentence = req.body;
    // log the request
    console.log(sentence)
    sentence.push(sentence)
    
    res.json(intensity)
});


app.post('/api/v1/week', (req, res) => {
    const sentence = req.body;

    console.log(sentence)
    sentence.push(sentence)

    var intensity = vader.SentimentIntensityAnalyzer.polarity_scores(sentence);
    res.send(intensity)
});

app.post('/api/v1/recommendation', (req, res) => {
    const sentence = req.body;

    console.log(sentence)
    sentence.push(sentence)

    res.send(intensity)
});

app.get('/api/v1/:user', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.user;

    // Searching books for the isbn
    for (let user of users) {
        if (users.user === user) {
            res.json(user);
            return;
        }
    }
    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

