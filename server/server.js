const vader = require('vader-sentiment');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
let average = (array) => array.reduce((a, b) => a + b) / array.length;
// Configuring body parser middleware
app.post('/api/v1/response', (req, res) => {
    // Pull in data
    let stuff = {}
    const dat = req.body
    console.log(dat);
    scores = {}
    scores.c_score = vader.SentimentIntensityAnalyzer.polarity_scores(dat.c_sentence);
    scores.h_score = vader.SentimentIntensityAnalyzer.polarity_scores(dat.h_sentence);
    scores.i_score = vader.SentimentIntensityAnalyzer.polarity_scores(dat.i_sentence);
    scores.m_score = vader.SentimentIntensityAnalyzer.polarity_scores(dat.m_sentence);
    scores.e_score = vader.SentimentIntensityAnalyzer.polarity_scores(dat.e_sentence);
    let compound = Object.values(scores).map(ele => ele.compound)
    scores.compound = average(compound)    
    console.log(scores);
    console.log(compound);
    res.json(scores)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));