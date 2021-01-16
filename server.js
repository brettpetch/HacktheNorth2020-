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

app.post('/api/v1/response', (req, res) => {
    // Pull in data
    obj = JSON.parse(req.body);
    // setup score dict
    scores = {c_score: 0, h_score: 0, i_score=0, m_score=0, e_score=0};
    scores.c_score = vader.SentimentIntensityAnalyzer.polarity_scores(obj.c_sentence);
    scores.h_score = vader.SentimentIntensityAnalyzer.polarity_scores(obj.h_sentence);
    scores.i_score = vader.SentimentIntensityAnalyzer.polarity_scores(obj.i_sentence);
    scores.m_score = vader.SentimentIntensityAnalyzer.polarity_scores(obj.m_sentence);
    scores.e_score = vader.SentimentIntensityAnalyzer.polarity_scores(obj.e_sentence);
    // log the scores
    console.log(scores);
    // 
    res.json(scores);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

